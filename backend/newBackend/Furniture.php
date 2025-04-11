<?php
require_once "Product.php";

class Furniture extends Product
{
    public function __construct($sku, $name, $price, $height, $width, $length)
    {
        parent::__construct($sku, $name, $price, "Furniture", [
            "height" => $height,
            "width" => $width,
            "length" => $length
        ]);
    }
}

?>