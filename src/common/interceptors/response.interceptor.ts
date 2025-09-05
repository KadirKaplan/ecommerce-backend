import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor<T extends { password?: any }> implements NestInterceptor<T, any> {
  private readonly excludeFields: (keyof T)[] = ['password'];

  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        let cleanData: any;

        if (Array.isArray(data)) {
          cleanData = data.map((item) => this.removeExcludedFields(item));
        } else if (data && typeof data === 'object') {
          cleanData = this.removeExcludedFields(data);
        } else {
          cleanData = data;
        }

        return {
          message: 'Success',
          statusCode: context.switchToHttp().getResponse().statusCode,
          data: cleanData,
          
        };
      }),
    );
  }

  private removeExcludedFields(obj: T): any {
    const result = { ...obj };
    for (const field of this.excludeFields) {
      if (field in result) {
        delete result[field];
      }
    }
    return result;
  }
}
