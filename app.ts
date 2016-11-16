import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup } from 'angular2/common';
//130

@Component({
	selector: 'forms-demo-app',
	directives: [FORM_DIRECTIVES],
	template: `
	<div class="ui raised segment">
		<h2 class="ui header">Demo Form: Sku</h2>
		<form #f="ngForm" (ngSubmit)="onSubmit(f.value)" class="ui form">
			<div class="field">
				<label for="skuInput">SKU</label>
				<input type="text"
						id="skuInput"
						placeholder="SKU"
						ngControl="sku"/>
			</div>
			<button type="submit" class="ui button">Submit</button>
		</form>
	</div>
	`
})

class FormsDemoApp {
	onSubmit(form: any): void {
		console.log('you submitted value: ', form);
	}
}

@Component({
	selector: 'form-sku-builder',
	directives: [FORM_DIRECTIVES],
	template: `
	<div class="ui raised segment">
		<h2 class="ui header">Demo Form: Sku with Builder</h2>
		<form [ngFormModel]="myForm"
				(ngSubmit)="onSubmit(myForm.value)"
				class="ui form">
				<div class="field">
					<label for="skuInput">SKU</label>
					<input type="text" 
								id="skuInput"
								placeholder="SKU"
								[ngFormControl]="myForm.controls['sku']">
				</div>
				<button type="submit" class="ui button">Submit</button>
		</form>
	</div>
	`
})
class FormSkuBuilder {
	myForm: ControlGroup;

	constructor(fb: FormBuilder){
		this.myForm = fb.group({
			'sku': ['ABC123']
		});
	}

	onSubmit(value: string): void {
		console.log(value);
	}
}


bootstrap(FormSkuBuilder);