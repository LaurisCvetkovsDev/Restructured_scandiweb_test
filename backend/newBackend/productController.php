<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}
require_once 'Product.php';
require_once 'Book.php';
require_once 'DVD.php';
require_once 'Furniture.php';

// Подключение к базе данных
$db = new PDO("mysql:host=localhost;dbname=product_db", "root", "");

// Получаем данные из запроса
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'POST':
        // Получение тела запроса
        $data = json_decode(file_get_contents("php://input"), true);

        $sku = $data['sku'];
        $name = $data['name'];
        $price = $data['price'];
        $type = $data['type'];

        switch ($type) {
            case 'Book':
                $product = new Book($sku, $name, $price, $data['weight']);
                break;
            case 'DVD':
                $product = new DVD($sku, $name, $price, $data['size']);
                break;
            case 'Furniture':
                $product = new Furniture($sku, $name, $price, $data['height'], $data['width'], $data['length']);
                break;
            default:
                http_response_code(400);
                echo json_encode(["error" => "Invalid product type"]);
                exit;
        }

        $product->save($db);
        echo json_encode(["message" => "Product saved"]);
        break;

    case 'GET':
        $stmt = $db->query("SELECT * FROM products");
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

        foreach ($products as &$product) {
            $product['attributes'] = json_decode($product['attributes'], true);
        }

        echo json_encode($products);
        break;

    case 'DELETE':
        $data = json_decode(file_get_contents("php://input"), true);
        $ids = $data['skus'] ?? [];

        if (empty($ids)) {
            http_response_code(400);
            echo json_encode(["error" => "No SKUs provided"]);
            exit;
        }

        $placeholders = implode(',', array_fill(0, count($ids), '?'));
        $stmt = $db->prepare("DELETE FROM products WHERE sku IN ($placeholders)");
        $stmt->execute($ids);

        echo json_encode(["message" => "Products deleted"]);
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Method not allowed"]);
}

?>