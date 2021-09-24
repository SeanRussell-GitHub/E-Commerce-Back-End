const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product}]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
      const categoryData = await Category.findByPk(req.params.id, {
          // JOIN with Products    (, using the Tag through table)
          include: [{ model: Product }, { model: Tag }]
        });
        if (!categoryData) {
            res.status(404).json({ message: 'No category found with this id!' });
            return;
          }
        
          res.status(200).json(categoryData);
        } catch (err) {
            res.status(500).json(err);
          }
});

router.post('/', async (req, res) => {
  // create a new category
  if(req.body.category_name.length){
    const newCategory = await Category.create(req.body).catch((err) => {
      res.status(400).json(err);
    });
    res.status(201).json(newCategory);
  } else {
    res.status(404).json('no category entered!');
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update({
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
