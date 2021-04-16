import BaseRepository from '../base.repository'
import {database} from '../../database'
const customerModel = database.get().models.customers

class CustomersRepository extends BaseRepository {

}

export default new CustomersRepository(customerModel, null)
