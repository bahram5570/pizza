"For importing images"

declare module "*.jpg" {
    export default "" as string;
  }
  declare module "*.png" {
    export default "" as string;
  }
  declare module "*.svg" {
    // export default "" as string;

    const content: any
    export default content
  }