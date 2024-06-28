"use client"

import { DocumentPermissions, Permissions } from "payload"
import React, { Fragment, useState } from "react"
import { Collapsible } from "@payloadcms/ui"
import Link from "next/link"

import PermissionTable from "../Table"

type DocumentCollapsibleProps = DocumentPermissions & {
  documentName: string
}

const DocumentCollapsible: React.FC<DocumentCollapsibleProps> = (props) => {
  const {
    documentName,
    fields,
    readVersions,
    read: readPermission,
    update: updatePermission,
  } = props

  // Optionally check for create and delete props
  const createPermission = "create" in props ? props.create : undefined
  const deletePermission = "delete" in props ? props.delete : undefined

  const [open, setOpen] = useState(false)
  return (
    <Collapsible
      header={documentName}
      isCollapsed={!open}
      onToggle={() => setOpen(!open)}
      className="field-type"
    >
      <table className="table" style={{ tableLayout: "fixed", width: "100%" }}>
        <thead>
          <tr>
            <td>Collection</td>
            {createPermission && <td>Create</td>}
            <td>Read</td>
            <td>Update</td>
            {deletePermission && <td>Delete</td>}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{documentName}</td>
            {createPermission && <td>{createPermission ? "✅" : "❌"}</td>}
            <td>{readPermission ? "✅" : "❌"}</td>
            <td>{updatePermission ? "✅" : "❌"}</td>
            {deletePermission && <td>{deletePermission ? "✅" : "❌"}</td>}
          </tr>
        </tbody>
      </table>
      <PermissionTable fields={fields} layout="fixed" />
    </Collapsible>
  )
}

const Container: React.FC<Permissions> = ({
  canAccessAdmin,
  collections = {},
  globals = {},
}) => {
  return (
    <Fragment>
      <div className="doc-controls__wrapper">
        <div className="doc-controls__content">
          <ul className="doc-controls__meta">
            <li className="doc-controls__list-item">
              <p className="doc-controls__value">
                canAccessAdmin: {canAccessAdmin ? "✅" : "❌"}
              </p>
            </li>
          </ul>
        </div>
        <div className="doc-controls__controls-wrapper">
          <div className="doc-controls__controls">
            <div className="form-submit">
              <button
                type="button"
                className="btn btn--style-secondary btn--icon-style-without-border btn--size-small btn--icon-position-right"
              >
                <span className="btn__content">
                  <Link href="/admin">
                    <span className="btn__label">Back</span>
                  </Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="doc-controls__divider"></div>
      <div className="field-type group-field group-field--top-level group-field--within-tab">
        <div className="group-field__wrap">
          <div className="group-field__header">
            <header>
              <h3 className="group-field__title">Collections</h3>
            </header>
          </div>
          <div className="render-fields render-fields--margins-small">
            {Object.entries(collections).map(([collectionName, collection]) => (
              <DocumentCollapsible
                key={collectionName}
                documentName={collectionName}
                {...collection}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="field-type group-field group-field--top-level group-field--within-tab">
        <div className="group-field__wrap">
          <div className="group-field__header">
            <header>
              <h3 className="group-field__title">Globals</h3>
            </header>
          </div>
          <div className="render-fields render-fields--margins-small">
            {Object.entries(globals).map(([globalName, globalCollection]) => (
              <DocumentCollapsible
                key={globalName}
                documentName={globalName}
                {...globalCollection}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Container
