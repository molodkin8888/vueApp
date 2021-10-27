import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Description from '@/components/Description.vue'

describe('Description.vue', () => {
    let wrapper;
    beforeEach(()=>{
        const localVue = createLocalVue()

        wrapper = shallowMount(Description, {
            localVue
        });
    })

    it('Checks the title component', () => {
        expect(wrapper.vm.title).toMatch('Hey Man!')
    })

    it('has an p', ()=>{
        expect(wrapper.find('p').exists()).toBe(true)
    })
})