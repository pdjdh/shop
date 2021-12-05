import Mock from 'mockjs'
import Product from './product.json'
import Seckill from './seckill.json'
import Menu from './menu.json'
import NewAndHot from './newAndHot.json'
Mock.mock('/product', {

  data: Product
})
Mock.mock('/seckill', {

  data: Seckill
})
Mock.mock('/menu', {
  data: Menu
})
Mock.mock('/newAndHot', {
  data: NewAndHot
})
