<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/")
     */
    public function homepage()
    {
        return $this->render('main/homepage.html.twig');
    }

    /**
     * @Route("/products")
     */
    public function products()
    {
        return $this->json([
            'Sheer Shears',
            'Wool Hauling Basket',
            'After-Shear (Fresh Cut Grass)',
            'After-Shear (Morning Dew)',
            'Shear Comb',
            'Shearly Conditioned',
        ]);
    }
}
