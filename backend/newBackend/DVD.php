<?php
require_once "Product.php";

class DVD extends Product
{
    public function __construct($sku, $name, $price, $size)
    {
        parent::__construct($sku, $name, $price, "DVD", ["size" => $size]);
    }
}

?>