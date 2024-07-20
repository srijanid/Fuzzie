'use client'
import React, { useEffect, useRef } from 'react'
 import * as LR from '@uploadcare/blocks'
import { useRouter } from 'next/navigation'
// import * as LR from "https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.39.0/web/lr-file-uploader-regular.min.js";



type Props = {
  onUpload: (e: string) => any
}

LR.registerBlocks(LR)

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null)

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl)
      if (file) {
        router.refresh()
      }
    }
    if (ctxProviderRef.current) {
      ctxProviderRef.current.addEventListener('file-upload-success', handleUpload)
    }

    return () => {
      if (ctxProviderRef.current) {
        ctxProviderRef.current.removeEventListener('file-upload-success', handleUpload)
      }
    }
  }, [onUpload, router])

  return (
    <div>
      <lr-config
     ctx-name="my-uploader"
     pubkey="8bfe4faaf610bc90bb1c"
     max-local-file-size-bytes="10000000"
     img-only="true"
     source-list="local, url, camera, dropbox, gdrive"
     />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        class={`st.my-config`}
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.39.0/web/lr-file-uploader-regular.min.js`}
      />

      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      />
    </div>
  )
}

export default UploadCareButton

// Ensure the CSS is correctly included, you can add this to your global CSS if necessary
// import 'https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.39.0/web/lr-file-uploader-regular.min.css';
