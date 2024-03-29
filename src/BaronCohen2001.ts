// The autism-spectrum quotient (AQ): evidence from Asperger syndrome/high-functioning autism, males and females, scientists and mathematicians
// DOI: 10.1023/a:1005653411471
export namespace BaronCohen2001 {
    const agreePointIndexs = [2, 4, 5, 6, 7, 9, 12, 13, 16, 18, 19, 20, 21, 22, 23, 26, 33, 35, 39, 41, 42, 43, 45, 46].map(i => i - 1);
    const disagreePointIndexs = [1, 3, 8, 10, 11, 14, 15, 17, 24, 25, 27, 28, 29, 30, 31, 32, 34, 36, 37, 38, 40, 44, 47, 48, 49, 50].map(i => i - 1);

    export function computeAQ(weights: Array<0|1|2|3>) {
        if(weights.length !== 50) throw new Error('Length should be 50.');

        let point = 0;
        for(const i of agreePointIndexs) {
            if(weights[i] === 0 || weights[i] === 1) point++;
        }
        for(const i of disagreePointIndexs) {
            if(weights[i] === 2 || weights[i] === 3) point++;
        }
        return point;
    }
};