<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

/**
 * @property int $id
 * @property string $buyer_username
 * @property string $payment_method
 * @property int $amount
 * @property string $status
 * @property string $created_at
 * @property string $updated_at
 */
class Trade extends Model
{
    const
        AMAZON_GIFT_CARD = 'AMAZON_GIFT_CARD',
        I_TUNES_GIFT_CARD = 'I_TUNES_GIFT_CARD',
        PAY_PAL = 'PAY_PAL',

        PAID = 'PAID',
        NOT_PAID = 'NOT_PAID';

    const ALLOWED_METHODS = [self::AMAZON_GIFT_CARD, self::I_TUNES_GIFT_CARD, self::PAY_PAL];
    const ALLOWED_STATUS = [self::PAID, self::NOT_PAID];
    const BIT_COIN_VALUE = 8834;

    protected $fillable = [
        'buyer_username',
        'payment_method',
        'amount',
        'status',
    ];

    protected $appends = ['first_name', 'reputation', 'btc_amount', 'statusColor', 'avatar', 'trade_hash'];

    public function rules()
    {
        return [
            'buyer_username' => 'required',
            'amount' => 'required|integer',
            'payment_method' => [
                'required',
                Rule::in(self::ALLOWED_METHODS),
            ],
            'status' => [
                'required',
                Rule::in(self::ALLOWED_STATUS),
            ]
        ];
    }

    public function getFirstNameAttribute(): string
    {
        return 'Chanaaar';
    }

    public function getReputationAttribute(): array
    {
        return [37, -1];
    }

    public function getStatusColorAttribute(): string
    {
        return strtolower($this->status) === strtolower(self::PAID) ? 'online' : 'away';
    }

    public function getAvatarAttribute(): string
    {
        return url('/') . Storage::url('public/images/avatar.png');
    }

    public function getPaymentMethodAttribute($value): string
    {
        return ucwords(strtolower(str_replace('_', ' ', $value)));
    }

    public function getStatusAttribute($value): string
    {
        return ucwords(strtolower(str_replace('_', ' ', $value)));
    }

    public function getBtcAmountAttribute()
    {
        return number_format((float)$this->amount / self::BIT_COIN_VALUE, 8, '.', '');
    }
    public function getTradeHashAttribute()
    {
        return uniqid();
    }
}
