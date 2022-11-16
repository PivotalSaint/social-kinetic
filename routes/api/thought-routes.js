const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

router.route('/:usernameId').post(addThought);

router.route('/:usernameId/:thoughtId').put(addReaction).delete(removeThought);

router.route('/:usernameId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
