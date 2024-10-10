'use strict'

const nav = document.querySelector('.header__nav')
const openNavBtn = document.querySelector('.menu__svg')
const closeNavBtn = document.querySelector('.close__svg')
const header = document.querySelector('.header')

const openNav = () =>{
    nav.classList.toggle('isActive')
    if(nav.classList.contains('isActive')){
        header.classList.add('isFixed')
    }
}

const closeNav = () =>{
    nav.classList.remove('isActive')
}

openNavBtn.addEventListener('click' , openNav)
closeNavBtn.addEventListener('click' , closeNav)