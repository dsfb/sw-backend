// @ts-ignore

import {genericController, PagebleResponse, ResourceReturn} from "../generic/generic-api";
import {People} from "../schemas/people";
import moxios from "moxios";
import {getAxiosInstance} from "../generic/axios-instance";
import {apiNoDataReturn, apiReturnData, apiReturnMultipleData, notFoundReturn} from "../../util/setupTests";

beforeEach(()=>{
    moxios.install();
})

afterEach(()=>{
    moxios.uninstall();
})

/**
 * As the generic-api layer is not responsible to get and solve eventual api errors I just test the basic functionality
 */
describe('API access tests',()=>{

    it('Finds by id',async ()=>{
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: apiReturnData
            })
        })
        const people:any = await genericController<People>('people').getById(1);
        expect(people.name).toBe("Luke Skywalker");
    })

    it('Finds by name partial',async ()=>{
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: apiReturnMultipleData
            })
        })
        const lista:any = await genericController<People>('people').getByPartialName("Luke",1);
        expect(lista.dados.length).toBe(10);
    })

    it('Deals with no data when the search name was never found ',async ()=>{
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: apiNoDataReturn
            })
        })
        const list:any = await genericController<People>('people').getByPartialName("A name that does not exists",1);
        expect(list.data.length).toBe(0);
        expect(list.page.next).toBeFalsy();
        expect(list.page.prior).toBeFalsy();
        expect(list.page.pageTotal).toBe(0);

    })

    it('Deals with looking for ids that does not exists',async ()=>{
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 404,
                response: notFoundReturn
            })
        })
        const people:any = await genericController<People>('people').getById(555);
        expect(people.name).toBeFalsy();
    })

})
