import flyNpm from 'fly-npm';
const obj = () => {
    console.log('引用的 fly-npm 版本为:', flyNpm.version);
    if (flyNpm.version > 1) {
        throw new Error('版本大于 1');
    }
}
export default obj;