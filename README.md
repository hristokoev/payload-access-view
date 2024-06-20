# Payload Access Visualizer

The Payload Access Visualizer is a tool designed to visualize the CRUD (Create, Read, Update, Delete) operations of a Payload's CRUD API Access JSON data. It provides a clear representation of both nested fields CRUDs and collection-level CRUDs.

## Installation

To use the Payload Access Visualizer, follow these steps:

1. Clone the repository: `$ git clone https://github.com/hristokoev/payload-access-view.git`
2. Copy the `views` folder to your `payload` folder
3. Add the component `PermissionTable` to `admin.components.views` in your payload config:

```ts
...
import AccessView from './views/AccessView'

export default buildConfig({
  admin: {
    ...
    components: {
      views: {
        AccessView: {
          path: '/access',
          exact: true,
          Component: AccessView
        }
      }
    },
    ...
  }
});

```

## Usage

To use the visualizer, simply navigate to `/admin/access`.

NOTE: This will be available for unauthorzied users as well. You can use `canAccessAdmin` from `AdminViewProps` to limit this.
