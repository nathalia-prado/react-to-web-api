/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Widget } from '../models/Widget'

const widgetUrl = '/api/v1/widgets/'

export async function getWidgets(): Promise<Widget[]> {
    const dbWidget = await request.get(widgetUrl)
    return dbWidget.body
}