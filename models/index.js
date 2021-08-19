// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: 'item_id',
});

// Categories have many Products
Categories.hasMany(Products, {
  foreignKey: 'item_id'
});

// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tags, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'products_tags'
});

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Products, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tags_products'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
