export default () => ({
  visitor: {
    ImportDeclaration: {
      exit: function (path, state) {
        const fileName = path.node.source.value;
        if (fileName.match(/\.s?css$/)) {
          path.remove();
        }
      }
    },
  },
})
