import { describe, it, expect } from 'vitest'
import * as _ from "../utils/dataAlgos"

const mockObj = {'Project name': "thisIsString",
    'Managed Area': "thisIsString",
    'LAS name': "thisIsString",
    Operator: "thisIsString",
    Date: new Date('2022.08.02'),
    Start: "thisIsString",
    End: "thisIsString",
    Duration: 69
}


describe('getDay', () => {
    it('Should return number, the day of the month from excelObject', () => {
        expect(_.getDay(mockObj)).toBe(2)
    })
})