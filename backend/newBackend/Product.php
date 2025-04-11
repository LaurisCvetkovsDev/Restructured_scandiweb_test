<?php
abstract class Product
{
    protected $sku, $name, $price, $type, $attributes;

    public function __construct($sku, $name, $price, $type, $attributes)
    {
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
        $this->type = $type;
        $this->attributes = $attributes;
    }

    public function save(PDO $db)
    {
        $stmt = $db->prepare("INSERT INTO products (sku, name, price, type, attributes) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([
            $this->sku,
            $this->name,
            $this->price,
            $this->type,
            json_encode($this->attributes)
        ]);
    }

    public function getData(): array
    {
        return [
            'sku' => $this->sku,
            'name' => $this->name,
            'price' => $this->price,
            'type' => $this->type,
            'attributes' => $this->attributes
        ];
    }
}

?>