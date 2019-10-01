"use strict";
/**
 * TreeGrid DataSource
 */
Object.defineProperty(exports, "__esModule", { value: true });

exports.numberOfItems = 5;

exports.sampleData = [
    {
        title: 'Administration',
        menus: ['View', 'Add', 'Modify', 'Delete', 'Default Page'],
        subTitle: [
            {
                title: 'Search',
                isSearched: true,
                menus: [false, false, false, false, false]
            },
            {
                title: 'Back Office Comapny',
                menus: [true, false, false, false, false],
            },
            {
                title: 'Region',
                menus: [false, false, true, false, false],
            },
            {
                title: 'Department',
                menus: [false, false, false, true, false],
            },
            {
                title: 'Section',
                menus: [true, false, false, false, true],
            },
            {
                title: 'Unit',
                menus: [false, true, false, false, false],
            },
            {
                title: 'Device',
                menus: [true, false, false, true, false],
            },
            {
                title: 'Import Device',
                menus: [false, true, false, false, false],
            },
            {
                title: 'Device Configuration',
                menus: [false, false, true, false, false],
            },
            {
                title: 'Vehicle Group',
                menus: [false, false, false, true, false],
            },
            {
                title: 'Vehicle Type',
                menus: [false, true, false, false, false],
            }
        ]
    },
    {
        title: 'Operation',
        menus: ['View', 'Default Page'],
        isRootMenu: true,
        subTitle: [
        ]
    },
    {
        title: 'Maintenance',
        menus: ['View', 'Default Page'],
        isRootMenu: true,
        subTitle: [
            {
                title: 'Search',
                isSearched: true,
                menus: [false, false]
            },
            {
                title: 'Maintenance List',
                menus: [false, false]
            },
            {
                title: 'Manage Tyre',
                menus: [false, true]
            },
            {
                title: 'Office Document Management',
                menus: [true, false]
            },
            {
                title: 'CAN Replace Tyre',
                menus: [true, true]
            },
            {
                title: 'Can View Tyre Replacement History',
                menus: [true, false]
            },
            {
                title: 'CAN Create Office Document Transfer',
                menus: [false, false]
            },
            {
                title: 'CAN Change Office Document Status',
                menus: [false, true]
            }
        ]
    },
    {
        title: 'Schedule',
        menus: ['View', 'Default Page'],
        isRootMenu: true,
        subTitle: [
        ]
    },
    {
        title: 'Reports',
        menus: ['View'],
        isRootMenu: true,
        subTitle: [
        ]
    },
    {
        title: 'Bookings',
        menus: ['View', 'Add', 'Modify', 'Delete'],
        isRootMenu: true,
        subTitle: [
        ]
    },
    {
        title: 'Finance',
        menus: ['View', 'Default Page'],
        isRootMenu: true,
        subTitle: [
        ]
    },
    {
        title: 'Mobile',
        menus: ['View', 'Add', 'Modify', 'Delete', 'Default Page'],
        isRootMenu: true,
        subTitle: [
        ]
    }
];