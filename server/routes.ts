import * as express from 'express';

import CatController from './controllers/CatController';
import StudentController from './controllers/StudentController';
import UserController from './controllers/UserController';
import catModel from './models/catModel';
import userModel from './models/userModel';
import studentModel from './models/studentModel';

export default function routes(app) {

  const router = express.Router();

  const cat = new CatController();
  const student = new StudentController();

  const user = new UserController();

  // cats
  router.route('/cats').get(cat.getAll);
  router.route('/cats/count').get(cat.count);
  router.route('/cat').post(cat.insert);
  router.route('/cat/:id').get(cat.get);
  router.route('/cat/:id').put(cat.update);
  router.route('/cat/:id').delete(cat.delete);

   // students
  router.route('/students').get(student.getAll);
  router.route('/students/count').get(student.count);
  router.route('/student').post(student.insert);
  router.route('/student/:id').get(student.get);
  router.route('/student/:id').put(student.update);
  router.route('/student/:id').delete(student.delete);

  // users
  router.route('/login').post(user.login);
  router.route('/users').get(user.getAll);
  router.route('/users/count').get(user.count);
  router.route('/user').post(user.insert);
  router.route('/user/:id').get(user.get);
  router.route('/user/:id').put(user.update);
  router.route('/user/:id').delete(user.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
