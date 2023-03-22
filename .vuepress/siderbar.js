const { createSideBarConfig } = require('./util')
const GO_PATH = '/blogs/go'
const JAVA_PATH = '/blogs/Java'
const SYSTEM_PATH = '/blogs/操作系统'
const INTERNET_PATH = '/blogs/计算机网络'
const COMPUTER_PATH = '/blogs/计算机组成'
const STRUCTURE_PATH = '/blogs/数据结构'
const AL_PATH = '/blogs/算法'
const PROBLEM_PATH = '/blogs/每日刷题'
const OTHER_PATH = '/blogs/一些问题'


module.exports = {
    [GO_PATH]: [createSideBarConfig('golang', GO_PATH)],
    [JAVA_PATH]: [createSideBarConfig('Java', JAVA_PATH)],
    [SYSTEM_PATH]: [createSideBarConfig('操作系统', SYSTEM_PATH)],
    [INTERNET_PATH]: [createSideBarConfig('计算机网络', INTERNET_PATH)],
    [COMPUTER_PATH]: [createSideBarConfig('计算机组成', COMPUTER_PATH)],
    [STRUCTURE_PATH]: [createSideBarConfig('数据结构', STRUCTURE_PATH)],
    [AL_PATH]: [createSideBarConfig('算法', AL_PATH)],
    [PROBLEM_PATH]: [createSideBarConfig('每日刷题', PROBLEM_PATH)],
    [OTHER_PATH]: [createSideBarConfig('遇到的问题', OTHER_PATH)],
}