
class DocListClass {
    docSet;
    constructor(set = {}) {
        this.docSet = set
    }

    [Symbol.iterator]() {
        let myDocs = this.docSet;
        let propUp = [];
        let prop = [];
        for (let key in myDocs) {
            myDocs[key].attr === "top"? propUp.push(key): prop.push(key)
        }
        let sort = (a, b) => {
            if (a === b) return 0;
            return a > b ? 1 : -1
        };
        prop.sort(sort);
        propUp.sort(sort);
        let items = propUp.concat(prop);
        let i = 0;
        return {
            next: function() {
                return {
                    done: i >= items.length,
                    value: myDocs[items[i++]]
                };
            }
        };

    }
}

export default DocListClass