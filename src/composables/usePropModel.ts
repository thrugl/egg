import { computed } from 'vue'

function usePropModel(props: Data, emit: Emit, name = 'value') { 
  return computed({ 
    get: () => props[name], 
    set: (value) => emit(`update${name === 'value' ? '' : `:${name}`}`, value) 
  })
}

export default usePropModel