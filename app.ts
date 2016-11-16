import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import { FORM_DIRECTIVES, CORE_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl} from 'angular2/common';
//141

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

@Component({
	selector: 'form-validations',
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
	template: `
	<div class="ui raised segment">
		<h2 class="ui header">Demo Form: with Validations</h2>
		<form [ngFormModel]="myForm"
				(ngSubmit)="onSubmit(myForm.value)"
				class="ui form">

				<div class="field"
						[class.error]="!sku.valid && sku.touched">
						<label for="skuInput">SKU</label>
						<input type="text"
								id="skuInput"
								placeholder="SKU"
								[ngFormControl]="sku">
						<div *ngIf="!sku.valid"
							class="ui error message">SKU is invalid
						</div>
				</div>

				<div *ngIf="!myForm.valid"
						class="ui error message">Form is invalid
				</div>
				<button type="submit" class="ui button">Submit</button>
				
		</form>
	</div>
	`
})
class FormValidations {
	myForm: ControlGroup;
	sku: AbstractControl;

	constructor(fb: FormBuilder) {
		this.myForm = fb.group({
			'sku': ['', Validators.required]
		});

		this.sku = this.myForm.controls['sku'];
	}
	onSubmit(value: string): void {
		console.log('you submitted value: ', value);
	}
} 


bootstrap(FormValidations);