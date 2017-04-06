import { makeRemotelyCallable } from 'src/util/webextensionRPC'

import extractPageText from './extract-page-text'
import extractPageMetadata from './extract-page-metadata'
import freezeDry from 'src/freeze-dry'

makeRemotelyCallable({
    extractPageText,
    extractPageMetadata,
    freezeDry,
})
