import { shallowMount } from '@vue/test-utils';
import Parent from '@/components/Parent.vue';
import Child from '@/components/Child.vue';

describe('Comunicación entre componentes', () => {
  it('envía texto del Child al Parent', async () => {
    const wrapper = shallowMount(Parent);
    const child = wrapper.findComponent(Child);
    
    const inputText = 'Hola';
    await child.vm.$emit('texto-enviado', inputText);
    
    // Verifica que el texto del Parent sea actualizado correctamente
    expect(wrapper.text()).toContain(`Texto recibido: ${inputText}`);
  });
});

