export const PRODUCT_CREATE = `create table if not exists PRODUCT (title text, price real, inventory number, image text)`
export const PRODUCT_DELETE = `drop table if exists PRODUCT`