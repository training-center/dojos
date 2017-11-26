<?php

use PHPUnit\Framework\TestCase as TestCase;

use Dojo\AVeryBigSum;

class SizeTest extends TestCase{


  public function testSize() {

    $tam = 5;

      $array = array(1,2,3,4);

    $function = new AVeryBigSum();

    $this->assertEquals("Array com tamanho Diferente",$function->veryBigSum($tam,$array));
  }
}

?>

