openapi: 3.0.2
info:
  title: 會員中心
  version: '0.01'
tags:
  - name: 會員
  - name: 個人會員
  - name: OAuth
  - name: 獎勵
paths:
  /api/v1/users:
    get:
      tags:
        - 會員
      summary: 搜尋多使用者含分頁
      parameters:
        - in: query
          name: id
          description: 會員 id
          schema:
            type: string
            example: 5489
        - in: query
          name: name_or_email
          description: 姓名或電子信箱
          schema:
            type: string
        - in: query
          name: gender
          description: 性別
          schema:
            type: string
            enum:
              - MALE
              - FEMALE
        - in: query
          name: email
          description: 電子信箱
          schema:
            type: string
        - in: query
          name: email~
          description: 電子信箱(完全吻合)
          schema:
            type: string
        - in: query
          name: county
          description: 縣市
          schema:
            type: string
            enum:
              - 基隆市
              - 臺北市
              - 新北市
              - 桃園市
              - 新竹市
              - 新竹縣
              - 苗栗縣
              - 臺中市
              - 彰化縣
              - 南投縣
              - 雲林縣
              - 嘉義市
              - 嘉義縣
              - 臺南市
              - 高雄市
              - 屏東縣
              - 臺東縣
              - 花蓮縣
              - 宜蘭縣
              - 澎湖縣
              - 金門縣
              - 連江縣
        - in: query
          name: area
          description: 行政區
          schema:
            type: string
            example: 西屯區
        - in: query
          name: phone
          description: 電話
          schema:
            type: string
          example: '0911123456'
        - in: query
          name: created_from
          description: 建立日期（開始日期）
          schema:
            type: string
            example: '2012-12-12'
        - in: query
          name: created_to
          description: 建立日期（結束日期）
          schema:
            type: string
            example: '2012-12-12'
        - in: query
          name: '_columns[]'
          description: 欄位。預設回傳所有欄位，可指定所需欄位
          schema:
            type: string
            example: id
        - $ref: '#/components/parameters/_page'
        - $ref: '#/components/parameters/_take'
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/user'
                  meta:
                    $ref: '#/components/schemas/pagination'
    post:
      tags:
        - 會員
      summary: 新增使用者
      requestBody:
        description: 新增的會員資料
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                  description: 姓名
                  example: 會員姓名
                last_name:
                  type: string
                  description: 姓氏
                  example: 會員姓氏
                first_name:
                  type: string
                  description: 名稱
                  example: 會員名稱
                email:
                  type: string
                  description: 電子信箱
                  example: 123@example.com
                remember_token:
                  type: string
                  example: J45mN31snZEl2Q78Zaf1F5Po3RgfPaI2AKBsGyv4xM1lpI82EjF0XCUEG000
                birthday:
                  type: string
                  description: 生日
                  example: '2016-08-03'
                gender:
                  type: string
                  description: 性別
                  enum:
                    - MALE
                    - FEMALE
                mailing_email:
                  type: string
                  description: 通知用電子信箱
                  example: 123@example.com
                phone:
                  type: string
                  description: 手機號碼
                  example: '+886911222333'
                tel:
                  type: string
                  description: 電話
                  example: 0423 663 333
                nationality:
                  type: string
                  description: 國籍
                  example: TW
                id_number:
                  type: string
                  description: 身分證字號
                  example: L111222333
                county:
                  type: string
                  description: 縣市
                  example: 臺中市
                area:
                  type: string
                  description: 區
                  example: 西屯區
                address:
                  type: string
                  description: 地址
                  example: 中山路55
      responses:
        '200':
          description: OK
  '/api/v1/users/{id}':
    get:
      tags:
        - 會員
      summary: 搜尋使用者
      parameters:
        - $ref: '#/components/parameters/uid'
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    $ref: '#/components/schemas/user'
    put:
      tags:
        - 會員
      summary: 更新使用者
      parameters:
        - $ref: '#/components/parameters/uid'
      requestBody:
        $ref: '#/components/requestBodies/put_user'
      responses:
        '400':
          description: Invalid ID supplied
          content: {}
        '404':
          description: user not found
          content: {}
        '405':
          description: Validation exception
          content: {}
      x-codegen-request-body-name: body
  '/api/v1/users/{id}/avatar':
    post:
      tags:
        - 會員
      summary: 上傳使用者頭像
      parameters:
        - $ref: '#/components/parameters/uid'
      requestBody:
        $ref: '#/components/requestBodies/avatar'
      responses:
        '204':
          description: No Content
  /oauth/me:
    get:
      tags:
        - 個人會員
      summary: 取得個人資料
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/user'
      security:
        - 個人權杖: []
  /api/v1/user:
    get:
      tags:
        - 個人會員
      summary: 取得使用者
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/user'
      security:
        - 個人權杖: []
    put:
      tags:
        - 個人會員
      summary: 更新使用者
      requestBody:
        $ref: '#/components/requestBodies/put_user'
      responses:
        '400':
          description: Invalid ID supplied
          content: {}
        '404':
          description: user not found
          content: {}
        '405':
          description: Validation exception
          content: {}
      x-codegen-request-body-name: body
      security:
        - 個人權杖: []
  /api/v1/user/reset_password:
    post:
      tags:
        - 個人會員
      summary: 密碼變更
      requestBody:
        description: 密碼變更
        required: true
        content:
          application/json:
            schema:
              properties:
                password:
                  type: string
                  description: 密碼
                  example: '123456'
                password_confirmation:
                  type: string
                  description: 密碼確認
                  example: '123456'
                old_password:
                  type: string
                  description: 舊密碼
                  example: '123456'
      responses:
        '204':
          description: No Content
      security:
        - 個人權杖: []
  /api/v1/user/avatar:
    post:
      tags:
        - 個人會員
      summary: 上傳使用者頭像
      requestBody:
        $ref: '#/components/requestBodies/avatar'
      responses:
        '204':
          description: No Content
      security:
        - 個人權杖: []
  /api/v1/clients:
    get:
      tags:
        - OAuth
      summary: 查詢 OAuth client 資訊
      parameters:
        - in: query
          name: domain
          description: 網域名稱
          schema:
            type: string
            example: partner
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/oauth_client'
  /api/v1/client-create:
    post:
      tags:
        - OAuth
      summary: 新增 OAuth client 資訊
      requestBody:
        description: 新增 OAuth client 資訊
        content:
          application/json:
            schema:
              type: object
              properties:
                domain:
                  description: 網域名稱
                  type: string
                  example: partner
                redirect:
                  description: 重新導向路徑
                  type: string
                  example: 'http://localhost'
        required: true
      responses:
        '200':
          description: OK
  /api/v1/socials:
    post:
      tags:
        - 會員
      summary: 新增或取得社交網站會員
      requestBody:
        description: 社交網站會員資料
        content:
          application/json:
            schema:
              type: object
              properties:
                provider_id:
                  type: string
                  example: '2092066550806768'
                provider:
                  type: string
                  description: 服務提供者
                  example: facebook
                name:
                  type: string
                  description: 姓名
                  example: 會員姓名
                email:
                  type: string
                  description: 電子信箱
                  example: 123@example.com
                avatar:
                  type: string
                  description: 頭像圖片
                  example: me.jpg
        required: true
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/user'
  /api/v1/password-email:
    post:
      tags:
        - 會員
      summary: 重設密碼信
      requestBody:
        description: 要申請重設密碼的會員信箱
        content:
          application/json:
            schema:
              properties:
                email:
                  type: string
                  description: 電子信箱
                  example: 123@example.com
        required: true
      responses:
        '204':
          description: No Content
  /api/v1/users/reset_password:
    post:
      tags:
        - 會員
      summary: 密碼變更
      requestBody:
        description: 密碼變更
        content:
          application/json:
            schema:
              properties:
                user_id:
                  type: integer
                  description: 使用者 ID
                  example: 5489
                password:
                  type: string
                  description: 密碼
                  example: '123456'
                password_confirmation:
                  type: string
                  description: 密碼確認
                  example: '123456'
                old_password:
                  type: string
                  description: 舊密碼
                  example: '123456'
        required: true
      responses:
        '204':
          description: No Content
  /api/v1/onetap:
    post:
      tags:
        - 會員
      summary: 新增或取得google one tap會員，成功回傳存取權仗
      requestBody:
        description: 取得google one tap 會員存取權仗
        content:
          application/json:
            schema:
              required:
                - token
              properties:
                client:
                  type: string
                  example: mem
                token:
                  type: string
                  example: eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZiOTVkZDFlMzRiZDJjZjc3ZDc1MjkxNTNmNGI0ZDUwOGY3YWZmMDIzZDkwMzdhZmI1Mzc1NDI3MmIzN2U5N2Q2NWIwMzJkNmU0ZDc4Y2ExIn0.eyJhdWQiOiIzNyIsImp0aSI6ImZiOTVkZDFlMzRiZDJjZjc3ZDc1MjkxNTNmNGI0ZDUwOGY3YWZmMDIzZDkwMzdhZmI1Mzc1NDI3MmIzN2U5N2Q2NWIwMzJkNmU0ZDc4Y2ExIiwiaWF0IjoxNjY3NDQ4MjQwLCJuYmYiOjE2Njc0NDgyNDAsImV4cCI6MTY5ODk4NDI0MCwic3ViIjoiNTY5Iiwic2NvcGVzIjpbXX0.ZksPDgCWrqaF3kX2gTEgVJPWcy3XFDOws38HCw88SF38lIEFy3SxlKSDndiw5Q6NO3X5F019y5kRZyifeUvxbmsy6WQsY_HRsv6pWgp2cFh3aED3YWaU4nfNJ47ePWLJHO1U9sHjOH7eoCs4eVPCPoP-9g6ANOqBizZv_zlqTlcMg6tcTjWp7wlfNB_q-oHIR_CDXWH8LoM1eBDq_rao_RY4UjKpeY31yTVh2OsUGwEx_dA9Ki18eT57emhCI_oGXqiSWgCiSk2h1-VxwJRyj3OO9LGJ_iBNIe72HCSBxXUPn7Zhpe7J7sfhHSKV7O1244rk_HmAOVNvUdURw7cEcYWUQZqk-mu7csDQH8JM8w_eh9eAVcv4TnOaqX1hHAUyHeP367iapjG0AOlPsQbb1TC5CUmHxsOHnJYIhj-hVPfq8_9_3Arb0ya32AODHFMShtWDls5emlR97Hi4yUb80DnjIFfi7XisPmEUIkoTfUxZmsP7qzNz4HWdigv4MLLyGfTxDWHrcsj0RgLRhtpXfz2Jau-vYwSu-rghET1ttnbaGosLakPDj8bON3coHvL_mm3hEpAlOJaOa5xZ2Y1MlJeRneVvuxrsCyE-3Dk-578AShjf6bs3vEjTiSZ6ORn8VZ3KiJAuxEeFCAbS93xsVkaTqj-KPpgozufYrS_Lf6Y
        required: true
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/oauth_personal_access'
        '401':
          description: 如果使用者未授權或權仗過期
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    description: 錯誤訊息
                    example: 使用者未授權GoogleOneTap應用程式或傳入的使用者權仗已過期
                  status_code:
                    type: integer
                    description: 錯誤代碼
                    example: 401
        '500':
          description: 發生預期外的錯誤
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    description: 錯誤訊息
                    example: 發生預期外的錯誤
                  status_code:
                    type: integer
                    description: 錯誤代碼
                    example: 500
  /api/v1/line/login:
    get:
      tags:
        - 會員
      summary: 跳轉至line登入
      parameters:
        - in: query
          name: redirect_uri
          schema:
            type: string
            example: https://example.com
        - in: query
          name: platform_id
          schema:
            type: string
            example: default
            description: |
              要使用哪一種 client_id，不傳就是預設 reelax的default
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/oauth_personal_access'
  /api/v1/oauth/apple_callback:
    post:
      tags:
        - 會員
      summary: 處理 apple 登入後的 callback
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - code
                - client
              properties:
                code:
                  type: string
                  description: apple 登入後的 code
                  example: 123456
                client:
                  type: string
                  description: |
                    client
                    * `mem` reelax
                    * `ios_mem` ios reelax (因 ios 的 client_id 與其他不同，所以另外開一個)
                  enum:
                    - mem
                    - ios_mem
                  example: apple
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/oauth_personal_access'
        '401':
          description: 如果使用者未授權或權仗過期
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    description: 錯誤訊息
                    example: 使用者未授權Apple應用程式或傳入的使用者權仗已過期
                  status_code:
                    type: integer
                    description: 錯誤代碼
                    example: 401
        '500':
          description: 錯誤資訊
          content:
            application/json:
              schema:
                anyOf:
                  - type: object
                    properties:
                      message:
                        type: string
                        description: 錯誤訊息
                        example: 發生預期外的錯誤
                      status_code:
                        type: integer
                        description: 錯誤代碼
                        example: 500
                  - type: object
                    properties:
                      message:
                        type: string
                        description: 指定的 client 不存在
                        example: not found client
                      status_code:
                        type: integer
                        description: 錯誤代碼
                        example: 500
                  - type: object
                    properties:
                      message:
                        type: string
                        description: 不合法的 id token
                        example: Invalid id_token
                      status_code:
                        type: integer
                        description: 錯誤代碼
                        example: 500
  /api/v1/oauth/android_callback:
    post:
      tags:
        - 會員
      summary: 處理 android 登入後的 callback
      requestBody:
        description: Apple 登入回調的 request body
        required: true
        content:
          application/json:
            schema: {}
      responses:
        '302':
          description: OK
          headers:
            Location:
              description: 重定向 URL
              schema:
                type: string
                example: 'intent://callback?{payload}#Intent;package={packageName};scheme=signinwithapple;end'
        '500':
          description: 錯誤資訊
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    description: 錯誤訊息
                    example: 發生預期外的錯誤
                  status_code:
                    type: integer
                    description: 錯誤代碼
                    example: 500
  /api/v1/reward_count:
    get:
      tags:
        - 獎勵
      summary: 獎勵總點數
      parameters:
        - in: query
          name: user_id
          description: '會員 id (user_id, email 二擇一)'
          required: true
          schema:
            type: string
            example: 5489
        - in: query
          name: email
          description: '電子信箱 (user_id, email 二擇一)'
          schema:
            type: string
            example: example@example.com
        - in: query
          name: kind
          description: |
            類型
            * `1`  點數
            * `2`  儲值金
            * `3`  票券
          schema:
            type: string
            enum:
              - 1
              - 2
              - 3
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  count:
                    type: number
                    description: 總點數
                    example: 700
                  point:
                    type: number
                    description: 點數總點數
                    example: 200
                  store:
                    type: number
                    description: 儲值金總點數
                    example: 500
  /api/v1/reward_paces:
    post:
      tags:
        - 獎勵
      summary: 新增獎勵歷程
      requestBody:
        description: 新增獎勵歷程
        content:
          application/json:
            schema:
              type: object
              required:
                - user_id
                - kind
                - value
                - expired_date
                - remark
              properties:
                user_id:
                  type: string
                  description: '會員 id (user_id, email 二擇一)'
                  example: 5489
                email:
                  type: string
                  description: '電子信箱 (user_id, email 二擇一)'
                  example: example@example.com
                kind:
                  description: |
                    類型
                    * `1`  點數
                    * `2`  儲值金
                    * `3`  票券
                  type: integer
                  enum:
                    - 1
                    - 2
                    - 3
                bonus_sort:
                  description: |
                    類型
                    * `1` 員工贈點
                    * `2` 推薦贈點
                    * `3` 生日點數
                    * `4` 消費贈點
                    * `5` 儲值贈點
                    * `6` 員工出差
                    * `7` 貴賓招待
                    * `8` 品牌行銷
                  type: integer
                  enum:
                    - 1
                    - 2
                    - 3
                    - 4
                    - 5
                    - 6
                    - 7
                    - 8
                action:
                  description: |
                    操作類型
                    * `1`  儲值/獲得點數
                    * `2`  消費/使用點數
                    * `3`  退款/退回點數
                  type: integer
                  nullable: true
                  enum:
                    - 1
                    - 2
                    - 3
                reward_id:
                  description: 獎勵 id，指定後只會針對該筆獎勵進行數值增加或減少
                  type: integer
                  example: 2
                value:
                  description: 數值，儲值金額/點數
                  example: 1000
                expired_date:
                  type: string
                  description: 過期日期
                  example: '9999-12-31'
                remark:
                  type: string
                  description: 備註
                  example: 雀客藏居台中住房消費
                meta:
                  type: object
                  additionalProperties: true
                  description: 元資料，任何資料額外資料
                  example:
                    booking_number: UEA3W1
                    hotel: 雀客藏居南港
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/reward_pace'
  /api/v1/user/reward_count:
    get:
      tags:
        - 個人會員
      summary: 獎勵總點數
      parameters:
        - in: query
          name: kind
          description: |
            類型
            * `1`  點數
            * `2`  儲值金
            * `3`  票券
          schema:
            type: string
            enum:
              - 1
              - 2
              - 3
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  count:
                    type: number
                    description: 總點數
                    example: 700
                  point:
                    type: number
                    description: 點數總點數
                    example: 200
                  store:
                    type: number
                    description: 儲值金總點數
                    example: 500
                  ticket:
                    type: number
                    description: 票券總點數
                    example: 500
      security:
        - 個人權杖: []
  /api/v1/user/rewards:
    get:
      tags:
        - 個人會員
      summary: 搜尋獎勵
      parameters:
        - $ref: '#/components/parameters/kind'
        - $ref: '#/components/parameters/_page'
        - $ref: '#/components/parameters/_take'
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/reward'
                  meta:
                    $ref: '#/components/schemas/pagination'
      security:
        - 個人權杖: []
  /api/v1/user/reward_paces:
    get:
      tags:
        - 個人會員
      summary: 搜尋獎勵歷程
      parameters:
        - in: query
          name: from
          required: true
          description: 交易開始時間
          schema:
            type: string
            example: '2022-12-01'
        - in: query
          name: to
          required: true
          description: 交易結束時間
          schema:
            type: string
            example: '2022-12-12'
        - $ref: '#/components/parameters/kind'
        - $ref: '#/components/parameters/_page'
        - $ref: '#/components/parameters/_take'
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/reward_pace'
                  meta:
                    $ref: '#/components/schemas/pagination'
      security:
        - 個人權杖: []
  /api/v1/products:
    get:
      tags:
        - 商品卡
      summary: 取得商品卡資訊
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/product'
  '/api/v1/products/{id}':
    get:
      tags:
        - 商品卡
      summary: 取得商品資訊
      parameters:
        - name: id
          in: path
          required: true
          description: 商品 id
          schema:
            type: integer
            example: 2
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    $ref: '#/components/schemas/product'
  /api/v1/ticket_products:
    get:
      tags:
        - 商品卡
      summary: 根據多個票券ID取得商品資訊
      parameters:
        - name: 'id[]'
          in: query
          required: true
          description: 票券ID
          schema:
            type: array
            items:
              type: integer
              example: 2
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/product'
  '/api/v1/ticket_products/{id}':
    get:
      tags:
        - 商品卡
      summary: 根據票券ID取得商品資訊
      parameters:
        - name: id
          in: path
          required: true
          description: 票券ID
          schema:
            type: integer
            example: 2
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    $ref: '#/components/schemas/product'
  /api/v1/fill_order:
    post:
      tags:
        - 訂單
      summary: 填寫訂單
      requestBody:
        content:
          application/json:
            schema:
              type: object
              required:
                - user_id
                - products
              properties:
                user_id:
                  type: string
                  description: 會員 id
                  example: 5489
                products:
                  type: array
                  description: 下訂商品
                  items:
                    type: object
                    properties:
                      product_id:
                        type: integer
                        description: 商品id
                        example: 2
                      qty:
                        type: integer
                        description: 數量
                        example: 2
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  products:
                    type: array
                    description: 下訂商品
                    items:
                      type: object
                      properties:
                        product_id:
                          type: integer
                          description: 商品id
                          example: 2
                        price:
                          type: integer
                          description: 單價
                          example: 1000
                        qty:
                          type: integer
                          description: 數量
                          example: 2
                  reward:
                    type: object
                    properties:
                      kind:
                        type: integer
                        description: '類型 (1:點數, 2:儲值金, 3:票券)'
                        example: 1
                      value:
                        type: integer
                        description: 數值，儲值金額/點數
                        example: 500
                      price:
                        type: integer
                        description: 價格
                        example: 500
                      expired_date:
                        type: string
                        description: 過期日期
                        example: '2023-12-31'
  /api/v1/order:
    post:
      tags:
        - 訂單
      summary: 新增訂單
      requestBody:
        content:
          application/json:
            schema:
              type: object
              required:
                - user_id
                - products
              properties:
                user_id:
                  type: string
                  description: 會員 id
                  example: 5489
                products:
                  type: array
                  description: 下訂商品
                  items:
                    type: object
                    properties:
                      product_id:
                        type: integer
                        description: 商品id
                        example: 2
                      qty:
                        type: integer
                        description: 數量
                        example: 2
                invoice:
                  type: object
                  description: 電子發票資訊
                  properties:
                    customer_identifier:
                      type: string
                      description: 統一編號
                      example: '54890959'
                    customer_name:
                      type: string
                      description: 公司抬頭
                      example: 敦謙國際智能科技股份有限公司
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  numebr:
                    type: string
                    description: 訂單編號
                    example: '121434534'
                  products:
                    type: array
                    description: 下訂商品
                    items:
                      type: object
                      properties:
                        product_id:
                          type: integer
                          description: 商品id
                          example: 2
                        price:
                          type: integer
                          description: 單價
                          example: 1000
                        qty:
                          type: integer
                          description: 數量
                          example: 2
                  price:
                    type: integer
                    description: 訂單價格
                    example: 2000
  /api/v1/orders:
    get:
      tags:
        - 訂單
      security:
        - 個人權杖: []
      summary: 查詢訂單列表
      parameters:
        - name: date
          in: query
          required: true
          description: 購買日期
          schema:
            type: string
            example: '2022-11-01'
        - name: type
          in: query
          required: true
          description: |
            類型
            * `1` 商品卡
            * `2` 票券
          schema:
            type: integer
            enum:
              - 1
              - 2
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/order'
  '/api/v1/user/orders/{number}':
    get:
      tags:
        - 訂單
      security:
        - 個人權杖: []
      summary: 根據訂單編號查詢訂單
      parameters:
        - name: number
          in: path
          required: true
          description: 訂單編號
          schema:
            type: string
            example: 1655329878
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/order_detail'
  /api/v1/payment:
    post:
      tags:
        - payment
      summary: 訂單付款
      description: 請用表單送出請求，並轉跳到金流商頁面
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              type: object
              required:
                - order_number
                - email
                - redirect
              properties:
                order_number:
                  type: string
                  description: 訂單編號
                  example: '121434534'
                email:
                  type: string
                  description: 會員 email
                  example: example@example.com
                redirect:
                  type: string
                  description: 付款結果跳轉頁
                  example: 'http://localhost/121434534'
      responses:
        '200':
          description: 產生表單內容送出跳轉到金流商頁面
          content:
            text/html:
              schema:
                type: string
                description: 表單內容
                example: |
                  <!DOCTYPE html> <html>
                      <head>
                          <meta charset="UTF-8" />
                          <meta http-equiv="refresh" content="0;url='https://examele.com'" />

                          <title>Redirecting to https://examele.com</title>
                      </head>
                      <body>
                          Redirecting to <a href="https://examele.com">https://examele.com</a>.
                      </body>
                  </html>
  /api/v1/invoice:
    post:
      tags:
        - payment
      summary: 開立發票
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              type: object
              properties:
                order_number:
                  type: string
                  description: 訂單編號
                customer_identifier:
                  type: string
                  description: 統一編號
                name:
                  description: 客戶名稱
                  type: string
                phone:
                  description: 手機號碼
                  type: string
                email:
                  description: 電子信箱
                  type: string
      responses:
        '200':
          description: 成功
  /oauth/authorize:
    get:
      summary: 授權登入頁面
      tags:
        - OAuth
      responses:
        '200':
          description: 以下回應會在會員成功登入後，將參數放在query params上跳轉至提供的重新導向網址
          content:
            application/json:
              schema:
                type: object
                properties:
                  code:
                    type: string
                    description: 授權碼
                  state:
                    type: string
                    description: 目前沒用到
                required:
                  - code
                  - state
      operationId: get-oauth-authorize
      parameters:
        - schema:
            type: string
          in: query
          name: client_id
          description: oauth 客戶端 ID
          required: true
        - schema:
            type: string
            example: code
          in: query
          name: response_type
          description: oauth模式 固定為`code`
          required: true
        - schema:
            type: string
            format: uri
          in: query
          name: redirect_uri
          description: 登入完成後重新導向的網址
          required: true
        - schema:
            type: string
          in: query
          name: scope
          description: 授權規則
          required: true
        - schema:
            type: string
          in: query
          name: state
          description: 目前不用直接傳null
          required: true
        - schema:
            type: string
            example: guest
            enum:
              - rms
              - mem
              - partner
              - guest
              - admin
          in: query
          name: role
          description: 來源平台
        - schema:
            type: string
            example: test@test.tw
            format: email
          in: query
          name: email
          description: 預填email
      security: []
      description: |-
        此API會直接顯示登入頁面，需要直接跳轉，不可使用CURL/XHR請求<br>
        授權登入成功後會跳轉至提供的網址
  /oauth/token:
    post:
      summary: 取得Access Token
      operationId: post-oauth-token
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                x-examples:
                  Example 1:
                    token_type: Bearer
                    expires_in: 604800
                    access_token: eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU3MGZiYWZkZDNmY2RmMzAxNzdkMWQyZDQyZGRlZTk4NGZiZjAwYWU5MTg0YTQ0NzQ2NjM1MDFlMTk0Njk4Y2RiZjczNzk0N2I1YzljZTg5In0.eyJhdWQiOiI0NiIsImp0aSI6IjU3MGZiYWZkZDNmY2RmMzAxNzdkMWQyZDQyZGRlZTk4NGZiZjAwYWU5MTg0YTQ0NzQ2NjM1MDFlMTk0Njk4Y2RiZjczNzk0N2I1YzljZTg5IiwiaWF0IjoxNjg0MjkxMDQzLCJuYmYiOjE2ODQyOTEwNDMsImV4cCI6MTY4NDg5NTg0Mywic3ViIjoiNTY2Iiwic2NvcGVzIjpbXX0.LVTlmgqm_GKwwdGvc0xma3lboY6Q5Jk3rZlLEYbgC4G7FoqMUpoBinCHxg0E9Ezt3sz8nUPEcrnKtplJnRbMCFlXmCrgkEivlUuV1QEodrBsxipBpbbTRMugslAR_ogtVN0jyudY7hJVhM8J5iQwCYCG8ZosrczsoTfmjJcmdrERjDEbbiMPFenR0ScYc2EpHy060fKNNEbXKGyqjUfNC8MqSu1vfpm-vXZKPtLAA3XmS74eIWc8bMYJLPSS7aJnKns6qjyDm-ld2qul1IqNNqQjkbNpcrIabfJUFDGtMPD3AiogmGSukueu6EvHKbRr1vHAZNzhl_awFREhnEpAgD3zFFqoinLKr5ifoWl0vYuSIvCjVnbsXXgCdFB7iS8n2QFz9G6Nj1-i5JfEMT0DCfVFDg-52-N1ceiZDxq51yZrm3IOjrWWrvXmoTe1IKoE6PI7KbIvVFjOGyd0C3P3hLtJZSplwlZR5mxG2paeJGHJ50-Yy5_7imcRsAqNcAnm8jeaaDNQGjYQ6WgxZjxoKmj_cRRTNqelzVREFgp5qvaz7aacGNQ3TYOnOhpyirlbF4x5vDylRvq92XuXJICkpBY9UfhwPKPV1NfdCUV9oAjlbPS5W66tYzYawcx9KOfQ9cHYmKdWu9n8oaVdmm95cgA5c2p0jrjBIzyJu0hy4zM
                    refresh_token: def502005edf5e66687b2e7e9ff8a59f2a1744c039cef8eff2d75706f30e32360c27437569f848cbc7748b78b845f04eb9ff65bcbb7e85f0fd986ef129f89bd636cbdb8f84868cbb3ac97cfbd4fff33d0bf770056686fb5c4be993bb827b359f17f20f474927add5e3d118fc08ad0a098880a46291a21ed1e608e09b1ca3f760c55981bf1d9a42b4618825c1b02d40f368c887feb4da06d155a454266ffcf98cdfe1cccecea33b5777dabc5de55bd3fda396a1324f0e6b4c779bdd3299f1aa97f5c8346734cba7615a51b4f4399f47e5a2e866f22bba6c1e5b2ec586fe94e9550ce33de5ed0442aa7899f948ae60a38ad26d24f8bf9f4b100132ebf83782f8173dcc4840a7df9f689e4d7ed4704021ff81e81f4f713ab78db3f3f82426462cee1820a88c70f4c4b5d6dfdc43e2441f045f46c7ca3f6c20f9b9718c78dddc63ae6974b014f926377b17137a7a6b54840e575ffd4568bb7d2f44bdc560d0185a098ac67b99
                properties:
                  token_type:
                    type: string
                    description: 權杖類別
                  expires_in:
                    type: integer
                    description: 逾期時間
                  access_token:
                    type: string
                    description: 通行權杖
                  refresh_token:
                    type: string
                    description: 刷新權杖
                required:
                  - token_type
                  - expires_in
                  - access_token
                  - refresh_token
              examples:
                Example 1:
                  value:
                    token_type: Bearer
                    expires_in: 604800
                    access_token: eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU3MGZiYWZkZDNmY2RmMzAxNzdkMWQyZDQyZGRlZTk4NGZiZjAwYWU5MTg0YTQ0NzQ2NjM1MDFlMTk0Njk4Y2RiZjczNzk0N2I1YzljZTg5In0.eyJhdWQiOiI0NiIsImp0aSI6IjU3MGZiYWZkZDNmY2RmMzAxNzdkMWQyZDQyZGRlZTk4NGZiZjAwYWU5MTg0YTQ0NzQ2NjM1MDFlMTk0Njk4Y2RiZjczNzk0N2I1YzljZTg5IiwiaWF0IjoxNjg0MjkxMDQzLCJuYmYiOjE2ODQyOTEwNDMsImV4cCI6MTY4NDg5NTg0Mywic3ViIjoiNTY2Iiwic2NvcGVzIjpbXX0.LVTlmgqm_GKwwdGvc0xma3lboY6Q5Jk3rZlLEYbgC4G7FoqMUpoBinCHxg0E9Ezt3sz8nUPEcrnKtplJnRbMCFlXmCrgkEivlUuV1QEodrBsxipBpbbTRMugslAR_ogtVN0jyudY7hJVhM8J5iQwCYCG8ZosrczsoTfmjJcmdrERjDEbbiMPFenR0ScYc2EpHy060fKNNEbXKGyqjUfNC8MqSu1vfpm-vXZKPtLAA3XmS74eIWc8bMYJLPSS7aJnKns6qjyDm-ld2qul1IqNNqQjkbNpcrIabfJUFDGtMPD3AiogmGSukueu6EvHKbRr1vHAZNzhl_awFREhnEpAgD3zFFqoinLKr5ifoWl0vYuSIvCjVnbsXXgCdFB7iS8n2QFz9G6Nj1-i5JfEMT0DCfVFDg-52-N1ceiZDxq51yZrm3IOjrWWrvXmoTe1IKoE6PI7KbIvVFjOGyd0C3P3hLtJZSplwlZR5mxG2paeJGHJ50-Yy5_7imcRsAqNcAnm8jeaaDNQGjYQ6WgxZjxoKmj_cRRTNqelzVREFgp5qvaz7aacGNQ3TYOnOhpyirlbF4x5vDylRvq92XuXJICkpBY9UfhwPKPV1NfdCUV9oAjlbPS5W66tYzYawcx9KOfQ9cHYmKdWu9n8oaVdmm95cgA5c2p0jrjBIzyJu0hy4zM
                    refresh_token: def502005edf5e66687b2e7e9ff8a59f2a1744c039cef8eff2d75706f30e32360c27437569f848cbc7748b78b845f04eb9ff65bcbb7e85f0fd986ef129f89bd636cbdb8f84868cbb3ac97cfbd4fff33d0bf770056686fb5c4be993bb827b359f17f20f474927add5e3d118fc08ad0a098880a46291a21ed1e608e09b1ca3f760c55981bf1d9a42b4618825c1b02d40f368c887feb4da06d155a454266ffcf98cdfe1cccecea33b5777dabc5de55bd3fda396a1324f0e6b4c779bdd3299f1aa97f5c8346734cba7615a51b4f4399f47e5a2e866f22bba6c1e5b2ec586fe94e9550ce33de5ed0442aa7899f948ae60a38ad26d24f8bf9f4b100132ebf83782f8173dcc4840a7df9f689e4d7ed4704021ff81e81f4f713ab78db3f3f82426462cee1820a88c70f4c4b5d6dfdc43e2441f045f46c7ca3f6c20f9b9718c78dddc63ae6974b014f926377b17137a7a6b54840e575ffd4568bb7d2f44bdc560d0185a098ac67b99
      description: 使用授權碼取得個人通行權杖
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                client_id:
                  type: string
                  description: 客戶端ID
                client_secret:
                  type: string
                  description: 客戶端密鑰
                grant_type:
                  type: string
                  description: 固定為`authorization_code`
                  enum:
                    - authorization_code
                  example: authorization_code
                redirect_uri:
                  type: string
                  description: 重新導向網址
                code:
                  type: string
                  description: 授權碼
              required:
                - client_id
                - client_secret
                - grant_type
                - redirect_uri
                - code
      tags:
        - OAuth
      security: []
  /logout/json:
    parameters: []
    get:
      summary: 登出（JSONP協定）
      operationId: get-logout-json
      responses:
        '200':
          description: OK (若無設定callback參數的話會返回`application/json`，反之返回`application/javascript`)
          content:
            application/javascript:
              schema:
                type: string
                example: '/**/jsonCallback([])'
            application/json:
              schema:
                type: object
                properties: {}
      parameters:
        - schema:
            type: string
          in: query
          name: callback
          description: JSONP callback 函數名
      description: |-
        返回會依照有沒有傳入callback參數而有所不同<br>
        JSONP請參閱： https://www.w3schools.com/js/js_json_jsonp.asp
      security:
        - 個人權杖: []
  /api/v1/reward_paces/refund:
    post:
      summary: 退點
      tags:
        - 獎勵
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/reward_pace'
      operationId: post-api-v1-reward_paces-refund
      security:
        - 伺服器權杖: []
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                reward_pace_ids:
                  type: array
                  x-stoplight:
                    id: uf3b3q7tgocd6
                  description: 要退款的記錄ID
                  items:
                    x-stoplight:
                      id: iq590dmqobdt0
                    type: integer
                value:
                  type: integer
                  x-stoplight:
                    id: 86piyhpvhjgoq
                  description: 退款金額(不分正負，會取絕對值)
              required:
                - reward_pace_ids
                - value
servers:
  - url: 'https://accounts.itrd.tw'
  - url: 'https://accounts.mastripms.tw'
components:
  parameters:
    uid:
      name: id
      in: path
      required: true
      description: 會員id
      schema:
        type: integer
    kind:
      in: query
      name: kind
      description: |
        類型
        * `1`  點數
        * `2`  儲值金
        * `3`  票券
      schema:
        type: string
        enum:
          - 1
          - 2
          - 3
    _page:
      in: query
      name: _page
      description: 頁數
      schema:
        type: integer
        example: 1
        default: 1
    _take:
      in: query
      name: _take
      description: 每頁筆數
      schema:
        type: integer
        example: 25
        default: 25
  requestBodies:
    put_user:
      description: 需更新的會員資料
      required: true
      content:
        application/json:
          schema:
            type: object
            required:
              - name
            properties:
              name:
                type: string
                description: 姓名
                example: 會員姓名
              last_name:
                type: string
                description: 姓氏
                example: 會員姓氏
              first_name:
                type: string
                description: 名字
                example: 會員名字
              email:
                type: string
                description: 電子信箱
                example: 123@example.com
              birthday:
                type: string
                description: 生日
                example: '2016-08-03'
              gender:
                type: string
                description: 性別
                enum:
                  - MALE
                  - FEMALE
              mailing_email:
                type: string
                description: 通知用電子信箱
                example: 123@example.com
              phone:
                type: string
                description: 手機號碼
                example: '+886911222333'
              tel:
                type: string
                description: 電話
                example: 0423 663 333
              nationality:
                type: string
                description: 國籍
                example: TW
              id_number:
                type: string
                description: 身分證字號
                example: L111222333
              county:
                type: string
                description: 縣市
                example: 臺中市
              area:
                type: string
                description: 區
                example: 西屯區
              address:
                type: string
                description: 地址
                example: 中山路55
              verified:
                type: boolean
                example: true
              tax_id:
                type: string
                description: 統一編號
                example: '54890959'
              received_by:
                type: string
                description: 公司抬頭
                example: 敦謙國際智能科技股份有限公司
              notification_token:
                type: string
                description: 推播 Token
                example: '1234567890'
    avatar:
      required: true
      content:
        multipart/form-data:
          schema:
            type: object
            properties:
              avatar:
                type: string
                format: binary
                description: 頭像
  schemas:
    user:
      description: 會員
      type: object
      required:
        - name
      properties:
        id:
          type: integer
          description: 會員id
          example: 23
        name:
          type: string
          description: 姓名
          example: 會員姓名
        last_name:
          type: string
          description: 姓氏
          example: 會員姓氏
        first_name:
          type: string
          description: 名字
          example: 會員名字
        email:
          type: string
          description: 電子信箱
          example: 123@example.com
        remember_token:
          type: string
          example: J45mN31snZEl2Q78Zaf1F5Po3RgfPaI2AKBsGyv4xM1lpI82EjF0XCUEG000
        birthday:
          type: string
          description: 生日
          example: '2016-08-03'
        gender:
          type: string
          description: 性別
          enum:
            - MALE
            - FEMALE
        mailing_email:
          type: string
          description: 通知用電子信箱
          example: 123@example.com
        phone:
          type: string
          description: 手機號碼
          example: '+886911222333'
        tel:
          type: string
          description: 電話
          example: 0423 663 333
        nationality:
          type: string
          description: 國籍
          example: TW
        id_number:
          type: string
          description: 身分證字號
          example: L111222333
        county:
          type: string
          description: 縣市
          example: 臺中市
        area:
          type: string
          description: 區
          example: 西屯區
        address:
          type: string
          description: 地址
          example: 中山路55
        created_date:
          type: string
          example: '2016-08-18'
        tax_id:
          type: string
          description: 統一編號
          example: '54890959'
        received_by:
          type: string
          description: 公司抬頭
          example: 敦謙國際智能科技股份有限公司
        notification_token:
          type: string
          description: 推播 Token
          example: '1234567890'
        avatar:
          type: string
          description: 頭像
          example: 'https://example.com/123.jpg'
        created_at:
          type: string
          example: '2016-08-17 22:24:15'
        updated_at:
          type: string
          example: '2020-11-20 16:46:44'
        from_hotel_id:
          type: integer
          example: null
        verified:
          type: boolean
          example: true
    oauth_client:
      description: OAuth client 資訊
      type: object
      properties:
        oauth_client:
          type: object
          properties:
            id:
              type: integer
              example: 1
            user_id:
              type: integer
              example: 23
            name:
              type: string
              description: 名稱
              example: 合作夥伴
            secret:
              type: string
              example: xj0l!lZ&ll6lE&c*9DjG32S7$v59Tm8*9cZ!0000
            domain:
              type: string
              description: 網域名稱
              example: partner
    oauth_personal_access:
      description: OAuth Personal Access 權仗
      type: object
      properties:
        access_token:
          type: string
          example: eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZiOTVkZDFlMzRiZDJjZjc3ZDc1MjkxNTNmNGI0ZDUwOGY3YWZmMDIzZDkwMzdhZmI1Mzc1NDI3MmIzN2U5N2Q2NWIwMzJkNmU0ZDc4Y2ExIn0.eyJhdWQiOiIzNyIsImp0aSI6ImZiOTVkZDFlMzRiZDJjZjc3ZDc1MjkxNTNmNGI0ZDUwOGY3YWZmMDIzZDkwMzdhZmI1Mzc1NDI3MmIzN2U5N2Q2NWIwMzJkNmU0ZDc4Y2ExIiwiaWF0IjoxNjY3NDQ4MjQwLCJuYmYiOjE2Njc0NDgyNDAsImV4cCI6MTY5ODk4NDI0MCwic3ViIjoiNTY5Iiwic2NvcGVzIjpbXX0.ZksPDgCWrqaF3kX2gTEgVJPWcy3XFDOws38HCw88SF38lIEFy3SxlKSDndiw5Q6NO3X5F019y5kRZyifeUvxbmsy6WQsY_HRsv6pWgp2cFh3aED3YWaU4nfNJ47ePWLJHO1U9sHjOH7eoCs4eVPCPoP-9g6ANOqBizZv_zlqTlcMg6tcTjWp7wlfNB_q-oHIR_CDXWH8LoM1eBDq_rao_RY4UjKpeY31yTVh2OsUGwEx_dA9Ki18eT57emhCI_oGXqiSWgCiSk2h1-VxwJRyj3OO9LGJ_iBNIe72HCSBxXUPn7Zhpe7J7sfhHSKV7O1244rk_HmAOVNvUdURw7cEcYWUQZqk-mu7csDQH8JM8w_eh9eAVcv4TnOaqX1hHAUyHeP367iapjG0AOlPsQbb1TC5CUmHxsOHnJYIhj-hVPfq8_9_3Arb0ya32AODHFMShtWDls5emlR97Hi4yUb80DnjIFfi7XisPmEUIkoTfUxZmsP7qzNz4HWdigv4MLLyGfTxDWHrcsj0RgLRhtpXfz2Jau-vYwSu-rghET1ttnbaGosLakPDj8bON3coHvL_mm3hEpAlOJaOa5xZ2Y1MlJeRneVvuxrsCyE-3Dk-578AShjf6bs3vEjTiSZ6ORn8VZ3KiJAuxEeFCAbS93xsVkaTqj-KPpgozufYrS_Lf6Y
        expires_in:
          type: integer
          example: 31536000
    reward:
      description: 獎勵
      type: object
      properties:
        reward_id:
          type: integer
          description: ID
          example: 23
        user_id:
          type: integer
          description: 會員編號
          example: 5489
        user_name:
          type: string
          description: 會員姓名
          example: 王大明
        kind:
          type: string
          description: 類型
          enum:
            - 點數
            - 儲值金
            - 票券
        bonus_sort:
          type: integer
          nullable: true
          description: |
            類型
            * `1` 員工贈點
            * `2` 推薦贈點
            * `3` 生日點數
            * `4` 消費贈點
            * `5` 儲值贈點
            * `6` 員工出差
            * `7` 貴賓招待
            * `8` 品牌行銷
          example: 1
        value:
          type: number
          description: 數值，儲值金額/點數
          example: 2000
        expired_date:
          type: string
          description: 到期日期
          example: '9999-12-31 23:59:59'
        remark:
          type: string
          description: 描述
          example: 2000 元商品卡
        created_at:
          type: string
          description: 建立時間
          example: '2012-12-12 12:12:12'
        updated_at:
          type: string
          description: 更新時間
          example: '2012-12-12 12:12:12'
    reward_pace:
      description: 獎勵歷程
      type: object
      properties:
        reward_pace_id:
          type: integer
          description: ID
          example: 23
        user_id:
          type: integer
          description: 會員編號
          example: 5489
        reward_id:
          type: integer
          description: 獎勵 ID
          example: 12
        kind:
          description: |
            類型
            * `1`  點數
            * `2`  儲值金
            * `3`  票券
          type: integer
          enum:
            - 1
            - 2
            - 3
        action:
          description: |
            操作類型
            * `1`  儲值/獲得點數
            * `2`  消費/使用點數
            * `3`  退款/退回點數
          type: integer
          nullable: true
          enum:
            - 1
            - 2
            - 3
        value:
          type: number
          description: 數值，儲值金額/點數
          example: -1500
        remark:
          type: string
          description: 描述
          example: 雀客藏居南港住房消費
        meta:
          type: object
          additionalProperties: true
          description: 元資料，任何資料額外資料
          example:
            booking_number: UEA3W1
            hotel: 雀客藏居南港
        created_at:
          type: string
          description: 建立時間
          example: '2012-12-12 12:12:12'
    product:
      description: 商品卡資訊
      type: object
      properties:
        id:
          type: integer
          description: 商品卡ID
          example: 1
        name:
          type: string
          description: 商品卡名稱
          example: 儲值金商品卡 1000點
        price:
          type: integer
          description: 價格
          example: 1000
        image:
          type: string
          description: 圖片
          example: 'https://picsum.photos/300/230'
        big_image:
          type: string
          nullable: true
          description: 大圖片
          example: 'https://picsum.photos/624/416'
        brief_description:
          type: string
          description: 商品簡略說明
          example: 商品簡略說明
        description:
          type: string
          description: 商品說明
          example: 商品完整說明
    order:
      description: 訂單
      type: object
      properties:
        id:
          type: integer
          description: 訂單ID
          example: 1
        type:
          type: integer
          description: |
            訂單類型
            * `1` 商品卡
            * `2` 票券
          enum:
            - 1
            - 2
        number:
          type: string
          description: 訂單編號
          example: '121434534'
        price:
          type: integer
          description: 價格
          example: 2000
        payment_status:
          type: string
          description: 金流狀況
          example: 未付款
        created_date:
          type: string
          description: 訂單新增日期
          example: '2022-11-01'
        created_at:
          type: string
          description: 訂單新增時間
          example: '2022-11-01 10:02:34'
        expired_at:
          type: string
          description: 訂單預計取消時間
          example: '2022-11-01 10:02:34'
        canceled_at:
          type: string
          description: 訂單取消時間
          example: '2022-11-01 10:02:34'
        products:
          type: array
          description: 下訂商品
          items:
            type: object
            properties:
              product_id:
                type: integer
                description: 商品id
                example: 1
              product_name:
                type: string
                description: 商品名稱
                example: 儲值金商品卡 1000點
              image:
                type: string
                description: 圖片
                example: 'https://picsum.photos/300/230'
              price:
                type: integer
                description: 單價
                example: 1000
              qty:
                type: integer
                description: 數量
                example: 2
    order_detail:
      allOf:
        - $ref: '#/components/schemas/order'
        - type: object
          properties:
            user_name:
              type: string
              description: 訂購人姓名
              example: 王小花
            products:
              type: array
              description: 下訂商品
              items:
                type: object
                properties:
                  hotels:
                    type: array
                    description: 適用館別
                    nullable: true
                    items:
                      type: string
                      example: 雀客旅館CHECKinn
                  ticket_type:
                    type: string
                    description: 票券類型
                    nullable: true
                    example: 住宿
                  ticket_numbers:
                    type: array
                    description: 票券序號
                    nullable: true
                    items:
                      type: string
                      example: a897jlia
            invoice_numebrs:
              type: array
              items:
                type: string
                example: IU70194078
            random_numbers:
              type: array
              items:
                type: string
                example: '3467'
    pagination:
      description: 分頁資訊
      type: object
      properties:
        pagination:
          type: object
          properties:
            total:
              type: integer
              description: 總筆數
              example: 35
            count:
              type: integer
              description: 取得筆數
              example: 15
            per_page:
              type: integer
              description: 每頁筆數
              example: 20
            current_page:
              type: integer
              description: 目前分頁
              example: 2
            total_pages:
              type: integer
              description: 總頁數
              example: 2
  securitySchemes:
    伺服器權杖:
      type: http
      scheme: bearer
      bearerFormat: JWT
      description: 伺服器對伺服器權杖
    個人權杖:
      type: http
      scheme: bearer
      description: 個人通行權杖
security:
  - bearerAuth: []
