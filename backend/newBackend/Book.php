<?php
require_once "Product.php";

class Book extends Product
{
    public function __construct($sku, $name, $price, $weight)
    {
        parent::__construct($sku, $name, $price, "Book", ["weight" => $weight]);
    }
}
?>