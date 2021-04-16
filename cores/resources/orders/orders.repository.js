import BaseRepository from '../base.repository'
import {database2} from '../../database'
const ordersModel = database2.get().models.orders
class OrdersRepository extends BaseRepository {

}

export default new OrdersRepository(ordersModel, null)
