import { AdminViewProps, InitPageResult } from "payload"
import { DefaultTemplate } from "@payloadcms/next/templates"
import { Gutter, HydrateClientUser } from "@payloadcms/ui"
import React, { Fragment } from "react"

import Container from "./Container"

const AccessView: React.FC<AdminViewProps> = async ({
  initPageResult,
}: {
  initPageResult: InitPageResult
}) => {
  return (
    <Fragment>
      <HydrateClientUser
        permissions={initPageResult.permissions}
        user={initPageResult.req.user}
      />
      <DefaultTemplate
        i18n={initPageResult.req.i18n}
        locale={initPageResult.locale}
        payload={initPageResult.req.payload}
        permissions={initPageResult.permissions}
        visibleEntities={initPageResult.visibleEntities}
      >
        <Gutter className="dashboard__wrap">
          <h1 className="doc-header__title render-title">Access Overview</h1>
          {initPageResult.permissions && (
            <Container {...initPageResult.permissions} />
          )}
        </Gutter>
      </DefaultTemplate>
    </Fragment>
  )
}

export default AccessView
