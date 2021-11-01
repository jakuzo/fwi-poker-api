import express from 'express';
import Controller from '../controllers/player';

const router = express.Router();

/**
 * @swagger
 * /players:
 *  get:
 *      description: Returns players
 *      produces:
 *          - appliction/json
 *      parameters:
 *          - name: from
 *            description: Where to begin pageination from
 *            type: number
 *          - name: size
 *            description: How big the page size should be (used with from parameter)
 *            type: number
 *          - name: total
 *            description: Limit of items to return
 *            type: number
 *          - name: sortBy
 *            description: Specify player attribute to sort by
 *            type: string
 *          - name: orderBy
 *            description: Specify sorting in an ascending or descending manner
 *            type: string
 *      responses:
 *          200
 */
router.get('/', Controller.index);

/**
 * @swagger
 * /players/:id:
 *  get:
 *      description: Returns a single player
 *      response:
 *          200
 */
router.get('/:id', Controller.show);

/**
 * @swagger
 * /players:
 *  post:
 *      description: Create a new player
 *      response:
 *          200
 */
router.post('/', Controller.create);

/**
 * @swagger
 * /players/:id:
 *  put:
 *      description: Update a single player
 *      response:
 *          200
 */
router.put('/:id', Controller.update);

/**
 * @swagger
 * /players/:id:
 *  delete:
 *      description: Delete a player
 *      response:
 *          200
 */
router.delete('/:id', Controller.destroy);

export default router;
