![Access Visualizer](https://github.com/hristokoev/payload-access-view/blob/main/screenshot.jpg?raw=true)

# Payload Access Visualizer for Payload 3.0 beta

The **Payload Access Visualizer** is a tool designed to visualize the CRUD (Create, Read, Update, Delete) operations of a Payload's CRUD API Access JSON data. It provides a clear representation of both nested fields CRUDs and collection-level CRUDs, making it easier to understand and manage API permissions.

## Features

- Collections and Globals CRUD operations
- Collections' fields CRU and Globals' RU operations
- Nested fields

## Installation

To use the Payload Access Visualizer, follow these steps:

1. **Clone the Repository**: Download the tool by cloning the repository.

   ```bash
   $ git clone https://github.com/hristokoev/payload-access-view.git
   ```

2. **Copy the Views Folder**: Copy the `_views` folder to your `src/app/(payload)` directory.

   ```bash
   $ cp -r payload-access-view/_views /path/to/your/project/src/app/(payload)
   ```

3. **Update Payload Configuration**: Add the `AccessView` component to `admin.components.views` and `AccessNavLink` to `admin.components.afterNavLinks` in your Payload configuration file.

   ```ts
   import AccessView from './src/app/(payload)/_views/AccessView'
   import AccessNavLink from './src/app/(payload)/_views/AccessView/NavLink'

   export default buildConfig({
     admin: {
       ...
       components: {
         afterNavLinks: [AccessNavLink],
         views: {
           AccessView: {
             path: '/access',
             exact: true,
             Component: AccessView
           }
         }
       }
     }
   });
   ```

**Note**: You can place the files in any directory you prefer, just ensure the import paths are correct.

## Usage

To use the visualizer, simply navigate to `/admin/access` in your web browser.

## Bugs

Currently, the metadata for the view is missing, causing the title to display 'Not Found undefined'. This issue does not impact the functionality of the visualizer.

## Reporting Issues

If you encounter any bugs or have suggestions for improvements, please report them on the [GitHub Issues](https://github.com/hristokoev/payload-access-view/issues) page of the repository.

Thanks!
