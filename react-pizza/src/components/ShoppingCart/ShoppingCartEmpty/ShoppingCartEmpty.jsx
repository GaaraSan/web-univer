import React from 'react'

import Button from '../../Button/Button'

import { ReactComponent as EmptyIcon } from '../../../assets/images/favicon/shopping-cart-clear-bg.svg'

import styles from './ShoppingCartEmpty.scss'

const ShoppingCartEmpty = () => {
	return (
		<div className='shopping-cart-empty' style={styles}>
			<div className='shopping-cart-empty-title'>Кошик порожній 😕</div>
			<div className='shopping-cart-empty-descr'>
				Скоріш за все, ви не замовляли ще піцу.
				<br />
				Для того, щоб замовити піцу, перейди на головну сторінку.
			</div>
			<EmptyIcon className='shopping-cart-empty-icon' />
			<Button className='shopping-cart-empty-button' borderRadius='lg' href='/'>
				Повернутися назад
			</Button>
		</div>
	)
}

export default ShoppingCartEmpty
