/**
 *
 * CSS classes for react
 *
 * List of classes
 *  className={classes('first', 'second', 'third')} become className="first second third"
 *  Usefull with push event arr.push(...); classes(...arr)
 *
 * Object of classes
 *  className={{
 *      first: true,
 *      second: false,
 *      third: 'something truthy'
 *  }} become className="first third"
 *
 */

export default (...classes) => {


    const classObject = classes[0]

    if (typeof classObject === 'string') {
        return classes.join(' ')
    }


    else if (classObject.toString() === '[object Object]') {
        let classString = ''

        for (const className in classObject) {
            const active = classObject[className]

            if (active) {
                classString += className + ' '
            }
        }

        return classString
    }

    console.warn('[class.js]: this method support only arguments of string or plain object')
    return ''
}