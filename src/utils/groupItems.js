import _ from 'lodash';

export const getEqualIndex = (list, item) => {
    return list.findIndex(x => 
        x.id === item.id && 
        _.isEqual(item.attrValues, x.attrValues));
}

export const groupItems = (list) => {
    const grouped = [];

    for (let item of list) {
        const equalIndex = getEqualIndex(grouped, item);
        if (equalIndex !== -1) {
            grouped[equalIndex].count++;
        } else {
            grouped.push({ ...item, count: 1 });
        }
    }

    return grouped;
}