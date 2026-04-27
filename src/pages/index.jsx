import { Route, Routes } from 'react-router'

import About from './About'
import Home from './Home'
import Contacts from './Contacts'
import Products from './Products'
import Product from './Product'


export default function Pages() {
    return (
        <Routes>
            <Route path='about' element={<About />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<Product />} />
            <Route path='/' element={<Home />} />
        </Routes>
    )
}