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

  /**
   * It should return the sum of the array
   */
  public function testSizeofIndex(){
    $tamanho = 1;
    $array = array(-1);
    $function = new AVeryBigSum();
    $this->assertEquals("Valor invalido", $function->veryBigSum($tamanho,$array));

  }
}

?>

