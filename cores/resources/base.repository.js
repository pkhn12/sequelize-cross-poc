import {_extend as extend} from 'util'
import _ from 'lodash'

export default class BaseRepository {
  constructor (model, event) {
    this._model = model
    this._event = event
  }
  __toObject (result) {
    if (!result) {
      return null
    }
    if (result.toJSON) {
      return result.toJSON()
    } else if (Array.isArray(result) && result.length) {
      return result.map(function (item) {
        return item.toJSON ? item.toJSON() : item
      })
    } else {
      return result
    }
  }
  count (where, options = {}) {
    return this._model.scope(options.scope || null).count(extend(options, {where: where}))
      .bind({self: this})
  }
  max (column, where, options = {}) {
    return this._model.scope(options.scope || null).max(column, extend(options, {where: where}))
      .bind({self: this})
      .then(function (result) {
        return this.self.__toObject(result)
      })
  }
  findOne (where, options = {}) {
    return this._model.scope(options.scope || null).findOne(extend(options, {where: where}))
      .bind({self: this})
      .then(function (result) {
        return this.self.__toObject(result)
      })
  }
  findById (id, options = {}) {
    return this._model.scope(options.scope || null).findById(id, options)
      .bind({self: this})
      .then(function (result) {
        return this.self.__toObject(result)
      })
  }
  findBy (where, options = {}) {
    return this._model.scope(options.scope || null).findAll(extend(options, {where: where}))
      .bind({self: this})
      .then(function (result) {
        if (typeof options.keyBy === 'string') return _.keyBy(this.self.__toObject(result), options.keyBy)
        return this.self.__toObject(result)
      })
  }
  findAndCountAllBy (where, options = {}) {
    return this._model.scope(options.scope || null).findAndCountAll(extend(options, {where: where}))
      .bind({self: this})
      .then(function (result) {
        result.rows = this.self.__toObject(result.rows)
        return result
      })
  }
  findOrCreate (where, defaultValues, options = {}) {
    return this._model.findCreateFind(extend(options, {where: where, defaults: defaultValues}))
      .bind({self: this})
      .then(function (result) {
        result.rows = this.self.__toObject(result.rows)
        return result
      })
  }
  updateBy (where, data, options = {}) {
    if (typeof options.hooks === 'undefined') {
      options.individualHooks = true
    }
    return this._model.update(data, extend(options, {where: where}))
  }
  deleteById (id, isPermanent) {
    isPermanent = isPermanent === true
    return this._model.destroy({where: {id: id}, force: isPermanent, individualHooks: true})
  }
  deleteBy (where, isPermanent) {
    isPermanent = isPermanent === true
    return this._model.destroy({where: where, force: isPermanent, individualHooks: true})
  }
  upsert (data) {
    return this._model.upsert(data, {individualHooks: true})
  }
  create (data, options = {}) {
    return this._model.create(data, options)
    .bind({self: this})
    .then(function (result) {
      return this.self.__toObject(result)
    })
  }
  bulkCreate (data, options) {
    return this._model
      .bulkCreate(data, options)
      .bind({ self: this })
      .then(function (result) {
        return this.self.__toObject(result)
      })
  }
}
