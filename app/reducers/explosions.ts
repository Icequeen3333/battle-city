import { Map } from 'immutable'
import { Action } from 'utils/actions'
import ExplosionRecord from 'types/ExplosionRecord'
import { ExplosionId, ExplosionType } from 'types'

export type ExplosionsMap = Map<ExplosionId, ExplosionRecord>

export default function explosions(state = Map() as ExplosionsMap, action: Action) {
  if (action.type === 'SPAWN_EXPLOSION') {
    let foo: ExplosionRecord
    return state.set(action.explosionId, ExplosionRecord(action))
  } else if (action.type === 'REMOVE_EXPLOSION') {
    return state.delete(action.explosionId)
  } else {
    return state
  }
}
