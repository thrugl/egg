import { computed } from 'vue'

function usePropModel(props: Data, emit: Emit, name = 'modelValue') { 
  return computed({ 
    get: () => props[name], 
    set: (value) => emit(`update:${name}`, value) 
  })
}

export default usePropModel