
### Get Started

```shell
# 1.
docker build -t monthly-cs-ecr-next-server .

# 2. ECR 인증용 비밀번호 조회
aws ecr get-login-password --region us-east-1 --profile monthly-cs

# 3. AWS_ACCOUNT_ID 조회
aws sts get-caller-identity --query "Account" --output text --profile monthly-cs

# 4. docker login
docker login --username AWS <AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com
docker login --username AWS 미야옹.dkr.ecr.us-east-1.amazonaws.com

# 5.
docker tag monthly-cs-ecr-next-server:latest 미야옹.dkr.ecr.us-east-1.amazonaws.com/monthly-cs-ecr-next-server:latest
# docker run -p 3000:3000 monthly-cs-ecr-next-server

# 6.
docker push <AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/monthly-cs-ecr-next-server:latest
docker push 미야옹.dkr.ecr.us-east-1.amazonaws.com/monthly-cs-ecr-next-server:latest
```

### /public 안나오는 법

1. Luke - 

```
아래 경로의 파일을
C:\monthly-cs\2024-04-cicd-week-3-template\public

아래와 같이 복사 붙여넣기
C:\monthly-cs\2024-04-cicd-week-3-template\.next\standalone\public
```
