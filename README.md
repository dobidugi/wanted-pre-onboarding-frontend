# 원티드 프리온보딩 프론트엔드 인턴쉽 선발 과제

이 레포지토리는 원티드 프리 온보딩 프론트엔드 인턴쉽 참여를 위한 선발 과제 레포지토리입니다.

https://github.com/walking-sunset/selection-task

## 프로젝트 실행 방법

```
gitclone https://github.com/dobidugi/wanted-pre-onboarding-frontend
npm install 
npm start
```

## 배포 

https://brilliant-kheer-4c78a3.netlify.app/


## 시연 영상

https://user-images.githubusercontent.com/21123166/216772534-639963ea-da03-4aec-b737-997263924b45.mp4



## 사용한 라이브러리

Typescript

react-router-dom

axios

craco

emotion


## 구현 내용

- TypeScript를 사용하여 구현하였습니다.

- 서버에 요청을 전송하였을때 실패하게된다면 에러 메세지를 출력하도록 구현하였습니다.

- 브라우저의 너비에따라 레이아웃이 변경되는 반응형 웹사이트입니다.

  -  ( min-width : 768px ) , ( max-width : 767px )

## 프로젝트 구조도
```


📦wanted-pre-onboarding-frontend
 ┣ 📂public
 ┃ ┣ 📜_redirects
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜logo192.png
 ┃ ┣ 📜logo512.png
 ┃ ┣ 📜manifest.json
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂components # 컴포넌트 모음 
 ┃ ┃ ┣ 📂common # 여러곳에서 사용되는 컴포넌트
 ┃ ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┃ ┣ 📜Error.tsx
 ┃ ┃ ┃ ┣ 📜GreyBackgroundWrapper.tsx
 ┃ ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┃ ┣ 📜LabelInput.tsx
 ┃ ┃ ┃ ┗ 📜SignWrapper.tsx
 ┃ ┃ ┗ 📂permission
 ┃ ┃ ┃ ┣ 📜GuestRoute.tsx # 비 로그인 유저만 접속할 수 있는 페이지를 만들어주는 컴포넌트 
 ┃ ┃ ┃ ┗ 📜PrivateRoute.tsx # 로그인 유저만 접속할 수 있는 페이지를 만들어주는 컴포넌트 
 ┃ ┣ 📂hooks # custom hooks
 ┃ ┃ ┗ 📜useValid.tsx
 ┃ ┣ 📂pages # pages 
 ┃ ┃ ┣ 📂Signin # /signin
 ┃ ┃ ┃ ┣ 📜InputForm.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Signup # /signup
 ┃ ┃ ┃ ┣ 📜InputForm.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂todo # /todo
 ┃ ┃ ┃ ┣ 📜NewTodoForm.tsx
 ┃ ┃ ┃ ┣ 📜TodoItem.tsx
 ┃ ┃ ┃ ┣ 📜TodoList.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂store # ContextAPI
 ┃ ┃ ┣ 📜SigninContex.ts
 ┃ ┃ ┣ 📜SignupContext.ts
 ┃ ┃ ┗ 📜TodoContext.ts
 ┃ ┣ 📂style # CSS
 ┃ ┃ ┣ 📜ContentResponsiveStyle.ts
 ┃ ┃ ┣ 📜GlobalStyle.tsx
 ┃ ┃ ┗ 📜SignSubmitButtonStyle.ts
 ┃ ┣ 📂types # DTO
 ┃ ┃ ┣ 📜BaseProps.ts
 ┃ ┃ ┣ 📜ErrorResponse.ts
 ┃ ┃ ┣ 📜InputProps.ts
 ┃ ┃ ┣ 📜InputType.ts
 ┃ ┃ ┣ 📜SigninContextProps.ts
 ┃ ┃ ┣ 📜SignupContextProps.ts
 ┃ ┃ ┣ 📜Todo.ts
 ┃ ┃ ┣ 📜TodoContextProps.ts
 ┃ ┃ ┗ 📜User.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📂apis # apis 
 ┃ ┃ ┃ ┣ 📂Signin
 ┃ ┃ ┃ ┃ ┗ 📜signinRequest.ts
 ┃ ┃ ┃ ┣ 📂Signup
 ┃ ┃ ┃ ┃ ┗ 📜signupRequest.ts
 ┃ ┃ ┃ ┗ 📂Todo
 ┃ ┃ ┃ ┃ ┣ 📜createTodo.ts
 ┃ ┃ ┃ ┃ ┣ 📜deleteTodo.ts
 ┃ ┃ ┃ ┃ ┣ 📜fetchTodos.ts
 ┃ ┃ ┃ ┃ ┗ 📜updateTodo.ts
 ┃ ┃ ┣ 📂validator # 검증 객체
 ┃ ┃ ┃ ┗ 📜UserValidator.ts
 ┃ ┃ ┗ 📜customAxios.ts
 ┃ ┣ 📜App.test.tsx
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜react-app-env.d.ts
 ┃ ┣ 📜reportWebVitals.ts
 ┃ ┗ 📜setupTests.ts
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜craco.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜tsconfig.json
```

## 과제
<details> 
<summary>과제 내용 자세히 보기</summary>

- 과제 수행 과정에서 지원자분들의 자율성과 창의력을 발휘하는 것을 기대하고 존중합니다. 다만, 아래 과제 안내에 적힌 가이드라인들은 모두 정확히 준수해주시기를 바랍니다.
- 가이드라인에 명시된 사항 외에는 자유롭게 진행해주셔도 됩니다.

### :: 1. 로그인 / 회원가입
- `/signup` 경로에 회원가입 기능을 개발해주세요
- `/signin` 경로에 로그인 기능을 개발해주세요

  - 페이지 안에 이메일 input, 비밀번호 input, 제출 button이 포함된 형태로 구성해주세요

    - 이메일 input에 `data-testid="email-input"` 속성을 부여해주세요
    - 패스워드 input에 `data-testid="password-input"` 속성을 부여해주세요
    - 회원가입 button에 `data-testid="signup-button"` 속성을 부여해주세요
    - 로그인 button에 `data-testid="signin-button"` 속성을 부여해주세요

    ```html
    <!-- 예시 -->
    <input data-testid="email-input" />
    <input data-testid="password-input" />
    <button data-testid="signup-button">회원가입</button>
    ```

- 두 페이지의 UI는 동일해도 무방합니다.

#### 
### Assignment 1
- 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요

  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
  - 이메일과 비밀번호의 유효성 검사 조건은 별도의 추가 조건 부여 없이 위의 조건대로만 진행해주세요 (e.g. 비밀번호 유효성 검사에 특수문자 포함 등의 새로운 조건을 추가하는 행위를 지양해주세요)

- 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해주세요
- 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.

#### Assignment 2

- 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동해주세요

#### Assignment 3

- 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요

  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - 응답받은 JWT는 로컬 스토리지에 저장해주세요

#### Assignment 4

- 로그인 여부에 따른 리다이렉트 처리를 구현해주세요

  - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요

---

### :: 2. TODO LIST

#### Assignment 5

- `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
- TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요
- TODO는 `<li>` tag를 이용해 감싸주세요

```html
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 1</span>
  </label>
</li>
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 2</span>
  </label>
</li>
```

#### Assignment 6

- 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요

  - TODO 입력 input에는 `data-testid="new-todo-input"` 속성을 부여해주세요
  - TODO 추가 button에는 `data-testid="new-todo-add-button"` 속성을 부여해주세요

    ```html
    <input data-testid="new-todo-input" />
    <button data-testid="new-todo-add-button">추가</button>
    ```

- 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요

#### Assignment 7

- TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.

#### Assignment 8

- TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요

  - 수정 버튼에는 `data-testid="modify-button"` 속성을 부여해주세요
  - 삭제 버튼에는 `data-testid="delete-button"` 속성을 부여해주세요

    ```html
    <li>
      <label>
        <input type="checkbox" />
        <span>TODO 1</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button">삭제</button>
    </li>
    ```

#### Assignment 9

- 투두 리스트의 삭제 기능을 구현해주세요

  - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

#### Assignment 10

- 투두 리스트의 수정 기능을 구현해주세요

  - TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요
  - 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
  - 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요
    - 수정 input창에는 `data-testid="modify-input"` 속성을 부여해주세요
  - 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요
    - 제출버튼에는 `data-testid="submit-button"` 속성을 부여해주세요
    - 취소버튼에는 `data-testid="cancel-button"` 속성을 부여해주세요
  - 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요
  - 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요

    ```html
    <input data-testid="modify-input" />
    <button data-testid="submit-button">제출</button>
    <button data-testid="cancel-button">취소</button>
    ```


</details>

## API

<details>

<summary>API 자세히 보기</summary>
- API 주소: [https://pre-onboarding-selection-task.shop/](https://pre-onboarding-selection-task.shop/)

## 스펙

## 1) Auth

---

## 1-1) SignUp

### 요청

- URL: `/auth/signup`
- Method: `POST`
- Headers:
  - Content-Type: `application/json`
- Body:
  - email: string
  - password: string

### 응답 예시

- status: 201 Created
- body: 없음

## 1-2) SignIn

### 요청

- URL: `/auth/signin`
- Method: `POST`
- Headers:
  - Content-Type: `application/json`
- Body:
  - email: string
  - password: string

### 응답 예시

- status: 200 OK
- body
  ```json
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwic3ViIjo0LCJpYXQiOjE2NTk5MDQyMTUsImV4cCI6MTY2MDUwOTAxNX0.DyUCCsIGxIl8i_sGFCa3uQcyEDb9dChjbl40h3JWJNc"
  }
  ```

## 2) Todo

## 2-1) createTodo

### 요청

- URL: `/todos`
- Method: `POST`
- Headers:
  - Authorization: `Bearer access_token`
  - Content-Type: `application/json`
- Body:
  - todo: string

### 응답 예시

- status: 201 Created
- body
  ```json
  {
    "id": 1,
    "todo": "과제하기",
    "isCompleted": false,
    "userId": 1
  }
  ```

## 2-2) getTodos

### 요청

- URL: `/todos`
- Method: `GET`
- Headers:
  - Authorization: `Bearer access_token`

### 응답 예시

- status: 200 OK
- body
  ```json
  [
    {
      "id": 1,
      "todo": "todo2",
      "isCompleted": false,
      "userId": 1
    },
    {
      "id": 2,
      "todo": "todo3",
      "isCompleted": false,
      "userId": 1
    }
  ]
  ```

## 2-3) updateTodo

### 요청

- URL: `/todos/:id`
- Method: `PUT`
- Headers:
  - Authorization: `Bearer access_token`
  - Content-Type: `application/json`
- Body:
  - todo: string
  - isCompleted: boolean

### 응답 예시

- status: 200 OK
- body
  ```json
  {
    "id": 1,
    "todo": "Hello World",
    "isCompleted": true,
    "userId": 2
  }
  ```

## 2-4) deleteTodo

### 요청

- URL: `/todos/:id`
- Method: `DELETE`
- Headers:
  - Authorization: `Bearer access_token`

### 응답 예시

- status: 204 No Content
- body: 없음

## 로컬 서버 구동

- 배포된 API에 문제가 있는 경우 활용할 수 있는 로컬 서버 구동법입니다.
- 로컬 서버는 sqlite에 의존성이 있습니다.

### 설치 및 실행

```zsh
$ npm install
$ npm start
```

- 위 순서대로 실행하면 localhost:8000 포트에 서버가 실행됩니다.
- 서버를 실행하면 db.sqlite 파일이 생성되며 해당 파일을 삭제 시 기존의 데이터는 초기화 됩니다.
- 그 외 스펙은 배포된 API와 동일합니다.

</details>