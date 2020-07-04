import {   Rule,  SchematicContext,  Tree,  apply,  url,  chain,  template,  mergeWith,  move,  branchAndMerge} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function createStructure(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    const name =_options.name;
    _context.logger.info(JSON.stringify(_options) + `name of the argumenr ${name}`);

const source= apply(url('./files'),[
   template({
     ...strings,
     ..._options as object
   } as any),
   move(_options.path)
  ]);

  return chain([branchAndMerge(chain([mergeWith(source)]))])(tree,_context);
    
  };
}
