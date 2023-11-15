import React from 'react';
import Business from './Business.js';

const BusinessList = () => {
    const businesses = [
        {
        imgSource: 'fakeimageplace.codecademy.com',
        name: 'restaurant name1',
        address: '1 Florida Ave.',
        city: 'Tampa',
        state: 'FL',
        zipcode: '44512',
        rating: 4.5,
        review_count: 80
    },
        {
        imgSource: 'fakeimageplace.codecademy.com',
        name: 'restaurant name2',
        address: '2 Florida Ave.',
        city: 'Tampa',
        state: 'FL',
        zipcode: '44512',
        rating: 4.5,
        review_count: 80
    },
        {
        imgSource: 'fakeimageplace.codecademy.com',
        name: 'restaurant name3',
        address: '3 Florida Ave.',
        city: 'Tampa',
        state: 'FL',
        zipcode: '44512',
        rating: 4.5,
        review_count: 80
    },
        {
        imgSource: 'fakeimageplace.codecademy.com',
        name: 'restaurant name4',
        address: '4 Florida Ave.',
        city: 'Tampa',
        state: 'FL',
        zipcode: '44512',
        rating: 4.5,
        review_count: 80
    },
        {
        imgSource: 'fakeimageplace.codecademy.com',
        name: 'restaurant name5',
        address: '5 Florida Ave.',
        city: 'Tampa',
        state: 'FL',
        zipcode: '44512',
        rating: 4.5,
        review_count: 80
    },
        {
        imgSource: 'fakeimageplace.codecademy.com',
        name: 'restaurant name6',
        address: '6 Florida Ave.',
        city: 'Tampa',
        state: 'FL',
        zipcode: '44512',
        rating: 4.5,
        review_count: 80
    },
    ]

    return (
        <div className='businessList'>
            {businesses.map((business, index) => (
            <Business key={index} business={business} />
            ))}
        </div>
    )
}

export default BusinessList;