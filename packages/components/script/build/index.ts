import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import { pkgPath, componentPath } from "../utils/paths";
import less from "gulp-less";
const ts = require("gulp-typescript");

const tsProject = ts.createProject("../../../../tsconfig.json");
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";
//删除dist

export const removeDist = () => {
  return delPath(`${pkgPath}/bmw-design-ui`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/bmw-design-ui/lib/src`))
    .pipe(dest(`${pkgPath}/bmw-design-ui/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);

// gulp.task('compile', function () {
//   return tsProject.src()
//     .pipe(tsProject())
//     .js.pipe(gulp.dest('dist'));
// });

// gulp.task('default', gulp.series('compile'));
