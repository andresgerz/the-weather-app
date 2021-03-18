<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Layout extends Component
{
    /**
     * The title html.
     *
     * @var string
     */
    public $title;

    /**
     * The header page.
     *
     * @var string
     */
    public $header;

    /**
     * Create the component instance.
     *
     * @param  string  $title
     * @param  string  $header
     * @return void
     */
    public function __construct($title, $header)
    {
        $this->title = $title;
        $this->header = $header;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        return view('components.layout');
    }
}
